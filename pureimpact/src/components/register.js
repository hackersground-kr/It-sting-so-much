import styles from '../css/register.module.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [repw, setRepw] = useState('');
  const [name, setName] = useState('');
  const [phoneNum,setPhoneNum] = useState('');


  const register = () => {
    if(id === "") return alert("아이디를 입력하세요.")
    if(pw === "") return alert("비밀번호를 입력하세요.")
    if(repw === "") return alert("비밀번호확인을 입력하세요.")
    if(repw !== pw) return alert("비밀번호가 일치하지 않습니다.")
    if(name === "") return alert("이름을 입력하세요.")
    if(phoneNum === "") return alert("전화번호를 입력하세요.")

    axios.post("api/register",{
      id: id,
      pw: pw,
      name: name,
      phoneNum: phoneNum
    }).then((res) => {
      if(res.data.sussces){
        navigate('/login');
      }else{
        alert(res.data.message);
      }
    })
  }
  return(
    <div className={styles.register_containner}>
      <div className={styles.register}>
        <div className={styles.registerTitle}><h1>SIGN UP</h1></div>
        <input className={styles.registerinput}
        type='text'
        value={id}
        placeholder='아이디'
        onChange={(e)=>{
          setId(e.target.value);
        }}/>
        <input className={styles.registerinput}
        type='password' 
        value={pw}
        placeholder='비밀번호'
        onChange={(e)=>{
          setPw(e.target.value);
        }}/>
        <input className={styles.registerinput}
        type='password'
        placeholder='비밀번호 확인'
        value={repw} 
        onChange={(e)=>{
          setRepw(e.target.value);
        }}/>
        <input className={styles.registerinput}
        type='text' 
        value={name}
        placeholder='이름'
        onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <input className={styles.registerinput}
        type='text'
        maxLength={11}
        value={phoneNum}
        placeholder='전화번호 - 없이 11자리'
        onChange={(e)=>{
          setPhoneNum(e.target.value);
        }}/>
        <div className={styles.submitBtn}>
          <button onClick={register} >회원가입하기</button>
        </div>
      </div>
    </div>
  )
}



export default Register;