import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BusinessHeader from './components/Navigations/BusinessHeader';
import BusinessAdminister from './pages/BusinessAdminister';
import GuestBook from './pages/GuestBook';
// NOTE: Restaurants === APP === MAIN

function Restaurants() {
  return (
    <>
      <BusinessHeader />
      <Routes>
        <Route path="/" element={<BusinessAdminister />} />
        <Route path="/Business/GuestBook" element={<GuestBook />} />
      </Routes>
    </>
  );
}

export default Restaurants;
