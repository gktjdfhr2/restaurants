import React from 'react';
import { Link } from 'react-router-dom';

function ReservationHist() {
  console.log('ReservationHist');
  return (
    <section id="info">
      <Link to="/SignIn" id="userInfo">
        <div>로그인하기 &gt;</div>
      </Link>
    </section>
  );
}
export default ReservationHist;
