import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../assets/placeholder.png';

function SignIn() {
  return (
    <>
      <section id="SignInSection">
        <img id="Logo" src={ImgLogo} alt="맛집지도" />
        <div>맛집지도</div>
      </section>
      <section id="SignInInfo">
        <form>
          <div>
            <input type="text" id="SignInId" />
            <input type="password" id="SignInPw" />
          </div>
          <div id="SignInSubmitForm">
            <input type="button" id="SignInSubmit" value="로그인" />
            <div id="signUp">
              회원이 아니신가요?
              <Link to="/SignUp">회원가입하기</Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default SignIn;
