import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomerHeader from './components/Navigations/CustomerHeader';
import MainBody from './pages/MainBody';
import CustomerInfo from './pages/CustomerInfo';
import CustomerSearch from './pages/CustomerSearch';
import SignIn from './pages/SignIn';
// import RecentViewedHist from '../components/CustomerInfo/RecentViewedHist';
import RecentViewedHist from './components/CustomerInfo/RecentViewedHist';
import RemoteLineHist from './components/CustomerInfo/RemoteLineHist';
import ReservationHist from './pages/ReservationHist';
import SignUp from './pages/SignUp';
import CustomerInfoModify from './pages/CustomerInfoModify';

// NOTE: Restaurants === APP === MAIN

function Restaurants() {
  return (
    <>
      <CustomerHeader />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/CustomerInfo" element={<CustomerInfo />} />
        <Route path="/CustomerSearch" element={<CustomerSearch />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RecentViewedHist" element={<RecentViewedHist />} />
        <Route path="/RemoteLineHist" element={<RemoteLineHist />} />
        <Route path="/ReservationHist" element={<ReservationHist />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/CustomerInfoModify" element={<CustomerInfoModify />} />
      </Routes>
    </>
  );
}

export default Restaurants;
