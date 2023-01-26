import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import ImgLogo from '../assets/placeholder.png';

function Header() {
  console.log('Header');
  return (
    <header>
      <section>
        <BrowserRouter>
          <h2>
            <Link to="../index.jsx">
              <img id="Logo" src={ImgLogo} alt="맛집지도" />
              <div>맛집지도</div>
            </Link>
          </h2>
          <ul className="ul_header">
            <li>
              <Link to="../index.jsx">원격 줄서기</Link>
            </li>
            <li>
              <Link to="../index.jsx">즉시 예약</Link>
            </li>
            <li>
              <Link to="../index.jsx">내정보</Link>
            </li>
            <li>
              <button type="button" className="btn_srch">
                검색
              </button>
            </li>
          </ul>
        </BrowserRouter>
      </section>
    </header>
  );
}

export default Header;
