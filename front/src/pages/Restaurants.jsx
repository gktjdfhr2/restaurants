import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import ProprietorHeader from '../components/Headers/ProprietorHeader';
// import ProprietorMainBody from './ProprietorMainBody';
// import GuestBook from './GuestBook';

import AppForUser from '../users';
import AppForProprietor from '../proprietors';

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
        {userType === '사업자' && (
          <AppForProprietor />
          // <>
          //   <ProprietorHeader />
          //   <Routes>
          //     <Route path="/" element={<ProprietorMainBody />} />
          //     <Route path="/proprietor/GuestBook" element={<GuestBook />} />
          //   </Routes>
          // </>
        )}
      </BrowserRouter>
    );
  }
}
