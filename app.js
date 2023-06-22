const express = require("express");
const app = express();
const knex = require("knex");
const cors = require("cors");
const path = require('path')
const session = require("express-session");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = 3000;

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
let corsOptions = {
  origin: "*",
  Credential: true,
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'pureimpact/build')));
app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'pureimpact/build/index.html'));
})
app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname,'pureimpact/build/index.html'));
})

app.use(session({
  secret: '12345',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE,
    pool: {
      min: 0,
      max: 10
    },
    acquireConnectionTimeout: 10000
  },
  useNullAsDefault: true
});

app.post("/api/register",async(req,res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const name = req.body.name;
  const phoneNum = req.body.phoneNum;

  const chkID = await db.select("*").from("users").where("id", id);
  if(chkID.length == 0){
    await db.insert({id,pw,name,phoneNum}).into('users');
    return res.json({
      success: true,
      message: "회원가입이 완료되었습니다."
    });
  }
  return res.json({
    success:  false,
    message: "id가 같습니다"
  });
});

app.post("/api/login", async(req,res)=>{
  const id = req.body.id;
  const pw = req.body.pw;
  const dbs = await db.select("*").from("users").where("id", id);
  
  if(dbs.length == 0 || dbs[0].pw != pw) {
    return res.json({ success: false, message: "잘못된 정보입니다" });
  }
  req.session.isLogin = dbs[0].id;
  req.session.id = id;
  req.session.save();
  return res.json({success: true, message: "로그인 성공", token: req.session.id, isLogin: req.session.isLogin})
})

app.post("/api/chatting", async(req,res) => {
  if(req.session.id){
    const user_id = req.body.user_id;
    const chat_room_id = req.body.chat_room_id;
    const chkID = await select("").from("participants").where("chat_room_id",chat_room_id).andWhere("user_id",user_id);

    if(chkID){
      return res.json({
        success: true,
        message: "인증확인"
      })
    }else{
      return res.json({
        success: false,
        message: "인증 불일치"
      })
    }
  }else{
    return res.json({
      success: false,
      message: "로그인 하세요."
    })
  }
});

app.post("/api/chat", async(req,res) =>{
  const sender_id = req.body.id;
  const content = req.body.content;
  const chat_room_id = req.body.chat_room_id;
  
  await db.insert({sender_id,content,chat_room_id}).into('messages');

  return res.json({
    success: true,
    message: "보내기 성공"
  })
});

app.post('/api/follow', async(req,res) => {
  const follow_id = req.body.follow_id;
  const following_id = req.body.following_id;

  await db('follow').insert({
    'follow_id':follow_id,
    'following_id':following_id
  }); 
});



module.exports = app;