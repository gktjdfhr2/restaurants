import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import MainBody from './MainBody';
import UserInfo from '../pages/UserInfo';
import UserSearch from './UserSearch';
import SignIn from './SignIn';
import RecentViewedHist from '../pages/RecentViewedHist';
import RemoteLineHist from '../pages/RemoteLineHist';
import ReservationHist from '../pages/ReservationHist';
import SignUp from './SignUp';

export default class Restaurants extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log('Restaurants');
    return (
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    );
  }
}
