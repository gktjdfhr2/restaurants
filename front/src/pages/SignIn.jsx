import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../assets/placeholder.png';

function SignIn() {
  console.log('signIn');
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
    <>
      <section id="SignInSection">
        <img id="Logo" src={ImgLogo} alt="맛집지도" />
        <div>맛집지도</div>
      </section>
      <section id="SignInInfo">
        <form onSubmit={loginSubmit}>
          <div>
            <input
              type="text"
              id="SignInId"
              value={loginIdCheck}
              onChange={loginIdHandle}
            />
            <input
              type="password"
              id="SignInPw"
              value={loginPwCheck}
              onChange={loginPwHandle}
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
      </section>
    </>
  );
}
export default SignIn;
