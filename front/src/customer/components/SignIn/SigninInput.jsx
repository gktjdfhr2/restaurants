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
    console.log('idinput', event.target.value);
    setSignInCheck({ ...signInCheck, userEmail: event.target.value });
  };

  const loginPwHandle = (event) => {
    setSignInCheck({ ...signInCheck, userPasswd: event.target.value });
  };

  const register = () => {
    console.log(signInCheck);
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
    console.log(signInCheck);
    register();
  };

  return (
    <form onSubmit={loginSubmit}>
      <div id="signin-container">
        <input
          type="text"
          value={signInCheck.userEmail}
          onChange={loginIdHandle}
          placeholder="아이디"
        />
        <input
          type="password"
          value={signInCheck.userPasswd}
          onChange={loginPwHandle}
          placeholder="비밀번호"
        />
      </div>
      <div id="signin-submit-container">
        <button type="submit" id="signin-submit-button">
          로그인
        </button>
        <div id="signup">
          회원이 아니신가요? &nbsp;
          <Link to="/SignUp">회원가입하기</Link>
        </div>
      </div>
    </form>
  );
}

export default SigninInput;
