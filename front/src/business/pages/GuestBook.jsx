import React from 'react';
import GuestSearch from '../components/GuestBook/GuestSearch';
import Guests from '../components/GuestBook/Guests';
import GuestInformation from '../components/GuestBook/GuestInformation';

function GuestBook() {
  console.log('asdadd');
  return (
    <>
      <section className="business-show-customer-section">
        <GuestSearch />
      </section>
      <section className="guest-book-container">
        <div className="guests-container">
          <Guests />
        </div>
        <div className="guest-information-container">
          <GuestInformation />
        </div>
      </section>
    </>
  );
}

export default GuestBook;
