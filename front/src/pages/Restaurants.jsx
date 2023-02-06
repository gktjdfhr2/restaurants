import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import MainBody from './MainBody';
import UserInfo from '../components/UserInfo';
import UserSearch from './UserSearch';
import SignIn from './SignIn';
import RecentViewedHist from '../components/RecentViewedHist';
import RemoteLineHist from '../components/RemoteLineHist';
import ReservationHist from './ReservationHist';
import SignUp from './SignUp';
import UserInfoModify from './UserInfoModify';

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
          <Route path="/UserInfoModify" element={<UserInfoModify />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
