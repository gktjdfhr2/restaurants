import React from 'react';

function ProprietorMainBody() {
  function callClick() {
    console.log('call');
  }
  function stayingClick() {
    console.log('staying');
  }
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
              <li className="topLi">
                <button
                  type="button"
                  className="callButton"
                  onClick={callClick}
                >
                  호출
                </button>
              </li>
              <li className="bottomLi recentCall">18 : 39</li>
            </ul>
            <ul>
              <li className="topLi">
                <button
                  type="button"
                  className="stayingButton"
                  onClick={stayingClick}
                >
                  대기
                </button>
              </li>
              <li className="bottomLi stayState">대기중</li>
            </ul>
          </li>
        </ul>
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
              <li className="topLi">
                <button
                  type="button"
                  className="callButton"
                  onClick={callClick}
                >
                  호출
                </button>
              </li>
              <li className="bottomLi recentCall">18 : 39</li>
            </ul>
            <ul>
              <li className="topLi">
                <button
                  type="button"
                  className="stayingButton"
                  onClick={stayingClick}
                >
                  대기
                </button>
              </li>
              <li className="bottomLi stayState">대기중</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProprietorMainBody;
