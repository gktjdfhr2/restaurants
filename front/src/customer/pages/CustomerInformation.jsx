import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Userinformation() {
  console.log('customerinformation');
  const [loginTest] = useState(false);
  return (
    <section id="sign-in-nav">
      {loginTest ? (
        <Link to="/CustomerInformationModify">
          <div id="customer-information-navigator">하성록</div>
        </Link>
      ) : (
        <Link to="/SignIn">
          <div id="customer-information-navigator">
            로그인 및 회원가입하기 &gt;
          </div>
        </Link>
      )}

      <ul className="customer-information-menu">
        <li>
          <Link to="/ReservationHist">예약 내역 &gt;</Link>
        </li>
        <li>
          <Link to="/RemoteLineHist">원격줄서기 내역 &gt;</Link>
        </li>
        <li>
          <Link to="/RecentViewedHist">최근 본 매장 &gt;</Link>
        </li>
      </ul>
    </section>
  );
}
export default Userinformation;
