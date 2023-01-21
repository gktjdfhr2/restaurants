import React from 'react';

function Header() {
  return (
    <header>
      <section>
        <h2>
          <a href="../index.jsx">맛집지도</a>
        </h2>
        <button type="button" className="btn_srch">
          검색
        </button>
        <ul className="pc_header">
          <li>
            <a href="../index.jsx">원격 줄서기</a>
          </li>
          <li>
            <a href="../index.jsx">즉시 예약</a>
          </li>
          <li>
            <a href="../index.jsx">내정보</a>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
