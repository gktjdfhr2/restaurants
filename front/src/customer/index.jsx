import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CustomerHeader from './components/Navigations/CustomerHeader';
import CustomertRestaurantsMap from './pages/CustomertRestaurantsMap';
import CustomerInformation from './pages/CustomerInformation';
import CustomerSearch from './pages/CustomerSearch';
import SignIn from './pages/SignIn';
import RecentViewedHistory from './components/CustomerInformation/RecentViewedHistory';
import RemoteLineHistory from './components/CustomerInformation/RemoteLineHistory';
import ReservationHistory from './pages/ReservationHistory';
import SignUp from './pages/SignUp';
import CustomerInformationModify from './pages/CustomerInformationModify';

// NOTE: Restaurants === APP === MAIN

function Restaurants() {
  return (
    <>
      <CustomerHeader />
      <Routes>
        <Route path="/" element={<CustomertRestaurantsMap />} />
        <Route path="/CustomerInformation" element={<CustomerInformation />} />
        <Route path="/CustomerSearch" element={<CustomerSearch />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RecentViewedHist" element={<RecentViewedHistory />} />
        <Route path="/RemoteLineHist" element={<RemoteLineHistory />} />
        <Route path="/ReservationHist" element={<ReservationHistory />} />
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
