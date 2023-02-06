import React from 'react';
import { Link } from 'react-router-dom';

function UserInfo() {
  console.log('userInfo');
  return (
    <section id="info">
      <Link to="/SignIn" id="userInfo">
        <div id="gogo">로그인 및 회원가입하기 &gt;</div>
      </Link>
      <ul className="infoUl">
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
export default UserInfo;
