import React from 'react';
import { Link } from 'react-router-dom';
import ReservationHistoryItems from '../components/ReservationHistory/ReservationHistoryItems';

function ReservationHistory() {
  console.log('ReservationHist');
  const loginState = false;
  return (
    <section id="sign-in-nav">
      {!loginState && (
        <Link to="/SignIn">
          <div>로그인하기 &gt;</div>
        </Link>
      )}
      {loginState && <ReservationHistoryItems />}
    </section>
  );
}
export default ReservationHistory;
