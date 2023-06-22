import React from 'react'
import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

const Login=()=> {

  const navigate = useNavigate();

  useEffect(()=>{
    if(sessionStorage.getItem("isLogin")){
      alert("이미 로그인 되었습니다.");
      navigate('/');
    }
  });

  const login = () => {
    const id = document.querySelector("#userID");
    const pw = document.querySelector("#password");
    if(id.value === null || id.value === ""){
      if(pw.value === null || pw.value === ""){
        return alert('아이디와 비밀번호를 입력해주세요.');
      } 
      return alert('아이디를 입력해주세요.');
    }else if(pw.value === null || pw.value === ""){
      return alert('비밀번호를 입력해주세요.');
    }
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/login',
      data: {
        id: id.value,
        pw: pw.value
      }
    })
    .then((res) =>{
      if(res.data.success) { 
        sessionStorage.setItem("isLogin",res.data.isLogin);
        sessionStorage.setItem("token",res.data.token);
        navigate('/');
      } else {
        alert(res.data.message);
      }})
      .catch(err => console.log(err.message));
  }

  return (
    <div className="page">
      <div className="container-login">
        <div className="login-box">
        <h1 className="Lh">LOGIN</h1>
          <div className="login">
            <input id="userID" type="text" placeholder="ID" />
            <input id="password" type="password" placeholder="PW" />
            <button className='button' onClick={login}>LOGIN</button>
            <p style={{ marginTop: '20px' }}>
              <Link to="/signUp" style={{
                  textDecoration: 'none',
                  color: '#4c80f1', 
                  fontSize: '13px', 
                  cursor: 'pointer' 
                }}>
                NULL 계정 만들기
              </Link>
            </p>
            <p style={{ marginTop: '10px', color: '#808080', fontSize: '13px' }}>비밀번호를 잊어버리셨나요?</p>
          </div>
        </div>
      </div>
    <style jsx>{`
      .page {
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 95vh;
      }

      .container-login {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .login-box {
        width: 410px;
        padding: 20px;
      }

      .Lh {
        margin:10px 10px 10px 10px;
        text-align: center;
        font-size: 28px;
        padding: 19px;
      }

      .login input {
        width: 100%;
        padding: 10px;
        margin-left:-10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        font-size: 14px;
      }

      .login input[type='text']:focus,
      .login input[type='password']:focus{
        border-color: #4c80f1;
      }
      
      .button {
        display: inline-block;
        padding: 0;
        width: 222px;
        height: 44px;
        background-color:#5163FF;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        color: #f9f9f9;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .button:hover {
        background-color: #5B50FF;
      }
      .button:active {
        background-color: #6246FF;
        animation: particlesEffect 0.2s;
      }
      @keyframes particlesEffect {
        0%{transform: scale(1);}
        50%{transform: scale(1.03);}
        100%{transform: scale(1);}
      }

      .login .button {
        margin-left:20px;
        width: 371px;
      }
      .login p {
        margin-top: 20px;
        text-align: center;
        font-size: 13px;
      }
    `}</style>
  </div>

  );
}
export default Login  