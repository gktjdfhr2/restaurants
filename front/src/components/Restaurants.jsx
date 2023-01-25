import React from 'react';
import Header from './Header';
import MainBody from '../pages/KakaoMap';

export default class Restaurants extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <MainBody />
      </>
    );
  }
}
