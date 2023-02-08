import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SigninInput() {
  console.log('signInInput');
  const [signInCheck, setSignInCheck] = useState({
    userEmail: '',
    userPasswd: '',
  });

  const loginIdHandle = (event) => {
    setSignInCheck({ ...signInCheck, userEmail: event.target.value });
  };
  const loginPwHandle = (event) => {
    setSignInCheck({ ...signInCheck, userPasswd: event.target.value });
  };

  const register = () => {
    axios
      .post('localhost:8080/api/auth/signIn', signInCheck)
      .then((response) => {
        console.log(response);
        console.log('data:', response.data.user);
        console.log('tocken', response.data.jwt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    register();
  };

  return (
    <form onSubmit={loginSubmit}>
      <div id="signInDiv">
        <input
          type="text"
          id="SignInId"
          value={signInCheck.userEmail}
          onChange={loginIdHandle}
          placeholder="아이디"
        />
        <input
          type="password"
          id="SignInPw"
          value={signInCheck.userPasswd}
          onChange={loginPwHandle}
          placeholder="비밀번호"
        />
      </div>
      <div id="SignInSubmitForm">
        <button type="submit" id="SignInSubmit" onSubmit={register}>
          로그인
        </button>
        <div id="signUp">
          회원이 아니신가요? &nbsp;
          <Link to="/SignUp">회원가입하기</Link>
        </div>
      </div>
    </form>
  );
}

export default SigninInput;
