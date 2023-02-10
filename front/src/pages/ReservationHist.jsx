import React from 'react';
import { Link } from 'react-router-dom';
import ReservationHistItems from '../components/ReservationHist/ReservationHistItems';

function ReservationHist() {
  console.log('ReservationHist');
  const loginState = true;
  return (
    <section id="info">
      {!loginState && (
        <Link to="/SignIn" id="userInfo">
          <div>로그인하기 &gt;</div>
        </Link>
      )}
      {loginState && <ReservationHistItems />}
    </section>
  );
}
export default ReservationHist;
