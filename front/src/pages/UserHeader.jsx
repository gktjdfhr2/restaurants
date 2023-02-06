import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../assets/placeholder.png';

function Header() {
  console.log('Header');
  return (
    <header>
      <section>
        <h2>
          <Link to="/">
            <img id="Logo" src={ImgLogo} alt="맛집지도" />
            <div>맛집지도</div>
          </Link>
        </h2>
        <ul className="ul_header">
          <li>
            <Link to="UserSearch">원격 줄서기</Link>
          </li>
          <li>
            <Link to="UserSearch">즉시 예약</Link>
          </li>
          <li>
            <Link to="/UserInfo">내정보</Link>
          </li>
          <li>
            <Link to="/UserSearch">
              <button type="button" className="btn_srch">
                검색
              </button>
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
