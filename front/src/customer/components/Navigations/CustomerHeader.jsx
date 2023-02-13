import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../../../assets/placeholder.png';
import HeaderLayout from '../../../components/Layouts/Header';

function Header() {
  console.log('customer-header component rendered');
  return (
    <HeaderLayout>
      <section>
        <h2>
          <Link to="/">
            <img id="Logo" src={ImgLogo} alt="맛집지도" />
            <div>맛집지도</div>
          </Link>
        </h2>
        <ul className="customer-header-ul">
          <li>
            <Link to="/CustomerSearch">원격 줄서기</Link>
          </li>
          <li>
            <Link to="/CustomerSearch">즉시 예약</Link>
          </li>
          <li>
            <Link to="/CustomerInformation">내정보</Link>
          </li>
          <li>
            <Link to="/CustomerSearch">
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
