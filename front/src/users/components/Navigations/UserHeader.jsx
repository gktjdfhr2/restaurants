import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../../assets/placeholder.png';
import HeaderLayout from '../../../components/Layouts/Header';

function Header() {
  console.log('user-header component rendered');
  return (
    <HeaderLayout>
      {/* <div className="logo">
        <Link to="/">
          <img id="Logo" src={ImgLogo} alt="맛집지도" />
          <div>맛집지도</div>
        </Link>
      </div> */}
      {/* <nav className="header-navigation"></nav> */}
      {/* <div className="header-search"></div> */}
      <section>
        <h2 id="userH2">
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
    </HeaderLayout>
  );
}

export default Header;
