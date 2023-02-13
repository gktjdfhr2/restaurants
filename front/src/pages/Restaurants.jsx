import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppForUser from '../customer';
import AppForBusiness from '../business';

export default class Restaurants extends React.Component {
  constructor() {
    super();

    this.state = {
      userType: '사업자',
    };
  }

  render() {
    const { userType } = this.state;
    console.log('Restaurants');
    return (
      <BrowserRouter>
        {userType === '고객' && <AppForUser />}
        {userType === '사업자' && <AppForBusiness />}
      </BrowserRouter>
    );
  }
}
