import React from 'react';

function ProprietorMainBody() {
  return (
    <section className="proprietorSection">
      <div>
        <div>대기 목록</div>
        <ul className="flexUl">
          <li className="flexLi">
            <ul>
              <li className="topLi stayNum">47</li>
              <li className="bottomLi stayStart">18 : 20</li>
            </ul>
            <ul>
              <li className="topLi stayName">정한결</li>
              <li className="bottomLi stayPersonnel">성인 03 유아 00 | 4782</li>
            </ul>
            <ul>
              <li className="topLi">호출 아이콘</li>
              <li className="bottomLi">18 : 39</li>
            </ul>
            <ul>
              <li className="topLi">대기 아이콘</li>
              <li className="bottomLi">대기중</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProprietorMainBody;
