import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../assets/placeholder.png';

function SignIn() {
  console.log('signIn');

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
            <input type="text" id="SignInId" />
            <input type="password" id="SignInPw" />
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
