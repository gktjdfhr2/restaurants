import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../../assets/placeholder.png';

function BusinessHeader() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = `0${now.getMonth() + 1}`.slice(-2);
  const dd = `0${now.getDate()}`.slice(-2);
  const formatDate = `${yyyy}-${mm}-${dd}`;

  const [nowDate, setNowDate] = useState(formatDate);

  const changeDate = useCallback(
    (event) => {
      setNowDate(event.target.value);
      console.log(event.target.value);
    },
    [nowDate],
  );
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
        </span>
        <span className="business-header-container ">
          <input
            type="date"
            id="businessHeaderDate"
            value={nowDate}
            onChange={changeDate}
          />
        </span>
        <span className="business-header-container">
          <Link to="/Business/GuestBook">게스트북</Link>
        </span>
      </section>
    </header>
  );
}

export default BusinessHeader;
