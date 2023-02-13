import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import BusinessHeader from '../components/Headers/BusinessHeader';
// import BusinessMainBody from './BusinessMainBody';
// import GuestBook from './GuestBook';

import AppForUser from '../customer';
import AppForBusiness from '../business';

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
        {userType === '고객' && <AppForUser />}
        {userType === '사업자' && <AppForBusiness />}
      </BrowserRouter>
    );
  }
}
