import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import MainBody from '../pages/MainBody';
import UserInfo from '../pages/UserInfo';
import UserSearch from '../pages/UserSearch';

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
        </Routes>
      </BrowserRouter>
    );
  }
}
