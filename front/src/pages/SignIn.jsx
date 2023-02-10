import React from 'react';
import ImgLogo from '../assets/placeholder.png';
import SigninInput from '../components/SignIn/SigninInput';

function SignIn() {
  return (
    <>
      <section id="SignInSection" className="c">
        <img id="Logo" src={ImgLogo} alt="맛집지도" />
        <div>맛집지도</div>
      </section>
      <section id="SignInInfo">
        <SigninInput />
      </section>
    </>
  );
}
export default SignIn;
