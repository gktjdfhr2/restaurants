import React from 'react';
import { Link } from 'react-router-dom';

function RemoteLineHist() {
  console.log('RemoteLineHist');
  return (
    <section id="sign-in-nav">
      <Link to="/SignIn">
        <div>로그인하기 &gt;</div>
      </Link>
    </section>
  );
}
export default RemoteLineHist;
