import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/placeholder.png';

function ProprietorHeader() {
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
    <header className="proprietorHeader">
      <section>
        <span>
          <h2>
            <Link to="/">
              <img id="Logo" src={ImgLogo} alt="맛집지도" />
              <div>맛집지도</div>
            </Link>
          </h2>
        </span>
        <span className="proprietorHeaderSpan ">
          <input
            type="date"
            id="proprietorHeaderDate"
            value={nowDate}
            onChange={changeDate}
          />
        </span>
        <span className="proprietorHeaderSpan">
          <Link to="/proprietor/GuestBook">게스트북</Link>
        </span>
      </section>
    </header>
  );
}

export default ProprietorHeader;
