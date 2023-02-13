import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomerHeader from './components/Navigations/CustomerHeader';
import MainBody from './pages/MainBody';
import CustomerInformation from './pages/CustomerInformation';
import CustomerSearch from './pages/CustomerSearch';
import SignIn from './pages/SignIn';
import RecentViewedHist from './components/CustomerInformation/RecentViewedHist';
import RemoteLineHist from './components/CustomerInformation/RemoteLineHist';
import ReservationHist from './pages/ReservationHist';
import SignUp from './pages/SignUp';
import CustomerInformationModify from './pages/CustomerInformationModify';

// NOTE: Restaurants === APP === MAIN

function Restaurants() {
  return (
    <>
      <CustomerHeader />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/CustomerInformation" element={<CustomerInformation />} />
        <Route path="/CustomerSearch" element={<CustomerSearch />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RecentViewedHist" element={<RecentViewedHist />} />
        <Route path="/RemoteLineHist" element={<RemoteLineHist />} />
        <Route path="/ReservationHist" element={<ReservationHist />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/CustomerInformationModify"
          element={<CustomerInformationModify />}
        />
      </Routes>
    </>
  );
}

export default Restaurants;
