import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SigninInput() {
  console.log('signInInput');
  const [loginIdCheck, setLoginIdCheck] = useState('');
  const [loginPwCheck, setLoginPwCheck] = useState('');

  const loginIdHandle = (event) => {
    setLoginIdCheck(event.target.value);
  };
  const loginPwHandle = (event) => {
    setLoginPwCheck(event.target.value);
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={loginSubmit}>
      <div id="signInDiv">
        <input
          type="text"
          id="SignInId"
          value={loginIdCheck}
          onChange={loginIdHandle}
          placeholder="아이디"
        />
        <input
          type="password"
          id="SignInPw"
          value={loginPwCheck}
          onChange={loginPwHandle}
          placeholder="비밀번호"
        />
      </div>
      <div id="SignInSubmitForm">
        <button type="submit" id="SignInSubmit">
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
