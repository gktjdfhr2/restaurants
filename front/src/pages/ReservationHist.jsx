import React from 'react';
import { Link } from 'react-router-dom';

function ReservationHist() {
  console.log('ReservationHist');
  return (
    <section id="info">
      <Link to="/SignIn" id="userInfo">
        <div>로그인 해주세요 &gt;</div>
      </Link>
    </section>
  );
}
export default ReservationHist;
