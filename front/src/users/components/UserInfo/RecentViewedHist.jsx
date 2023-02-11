import React from 'react';
import { Link } from 'react-router-dom';

function RecentViewedHist() {
  console.log('RecentViewedHist');
  return (
    <section id="info">
      <Link to="/SignIn" id="userInfo">
        <div>로그인하기 &gt;</div>
      </Link>
    </section>
  );
}
export default RecentViewedHist;
