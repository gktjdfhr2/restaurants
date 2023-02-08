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
import ProprietorHeader from './ProprietorHeader';
import ProprietorMainBody from './ProprietorMainBody';
import GuestBook from './GuestBook';

export default class Restaurants extends React.Component {
  constructor() {
    super();

    this.state = {
      userType: '고객',
    };
  }

  render() {
    const { userType } = this.state;
    console.log('Restaurants');
    return (
      <BrowserRouter>
        {userType === '고객' && (
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
        )}
        {userType === '사업자' && (
          <>
            <ProprietorHeader />
            <Routes>
              <Route path="/" element={<ProprietorMainBody />} />
              <Route path="/proprietor/GuestBook" element={<GuestBook />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    );
  }
}
