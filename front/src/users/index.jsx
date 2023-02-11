import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserHeader from './components/Navigations/UserHeader';
import MainBody from './pages/MainBody';
import UserInfo from './pages/UserInfo';
import UserSearch from './pages/UserSearch';
import SignIn from './pages/SignIn';
// import RecentViewedHist from '../components/UserInfo/RecentViewedHist';
import RecentViewedHist from './components/UserInfo/RecentViewedHist';
import RemoteLineHist from './components/UserInfo/RemoteLineHist';
import ReservationHist from './pages/ReservationHist';
import SignUp from './pages/SignUp';
import UserInfoModify from './pages/UserInfoModify';

// NOTE: Restaurants === APP === MAIN

function Restaurants() {
  return (
    <>
      <UserHeader />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/UserSearch" element={<UserSearch />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RecentViewedHist" element={<RecentViewedHist />} />
        <Route path="/RemoteLineHist" element={<RemoteLineHist />} />
        <Route path="/ReservationHist" element={<ReservationHist />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserInfoModify" element={<UserInfoModify />} />
      </Routes>
    </>
  );
}

export default Restaurants;
