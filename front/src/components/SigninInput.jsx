import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SigninInput() {
  console.log('signInInput');
  const [signInCheck, setSignInCheck] = useState({ idCheck: '', pwCheck: '' });

  const loginIdHandle = (event) => {
    setSignInCheck({ ...signInCheck, idCheck: event.target.value });
  };
  const loginPwHandle = (event) => {
    setSignInCheck({ ...signInCheck, pwCheck: event.target.value });
  };

  const register = () => {
    axios
      .post('localhost:3000/api/auth/login', signInCheck)
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
          value={signInCheck.idCheck}
          onChange={loginIdHandle}
          placeholder="아이디"
        />
        <input
          type="password"
          id="SignInPw"
          value={signInCheck.pwCheck}
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
