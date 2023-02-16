import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../../assets/placeholder.png';
import BusinessCalendar from '../BusinessHeader/BusinessCalendar';

function BusinessHeader() {
  return (
    <header className="business-header">
      <section>
        <span>
          <h2>
            <Link to="/">
              <img id="Logo" src={ImgLogo} alt="맛집지도" />
              <div>맛집지도</div>
            </Link>
          </h2>
          ß
        </span>
        <BusinessCalendar />
        <span className="business-header-container">
          <Link to="/Business/GuestBook">게스트북</Link>
        </span>
      </section>
    </header>
  );
}

export default BusinessHeader;
