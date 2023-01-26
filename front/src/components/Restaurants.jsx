import React from 'react';
import Header from './Header';
import MainBody from '../pages/MainBody';

export default class Restaurants extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log('Restaurants');
    return (
      <>
        <Header />
        <MainBody />
      </>
    );
  }
}
