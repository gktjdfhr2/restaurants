import React from 'react';
import { Link } from 'react-router-dom';
import ReservationHistItems from '../components/ReservationHist/ReservationHistItems';

function ReservationHist() {
  console.log('ReservationHist');
  const loginState = false;
  return (
    <section id="sign-in-nav">
      {!loginState && (
        <Link to="/SignIn">
          <div>로그인하기 &gt;</div>
        </Link>
      )}
      {loginState && <ReservationHistItems />}
    </section>
  );
}
export default ReservationHist;
