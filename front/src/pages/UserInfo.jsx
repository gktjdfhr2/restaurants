import React from 'react';
import { Link } from 'react-router-dom';

function UserInfo() {
  console.log('userInfo');
  return (
    <section id="info">
      <Link to="/Login" id="userInfo">
        <div>로그인 및 회원가입하기 &gt;</div>
      </Link>
      <ul>
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
