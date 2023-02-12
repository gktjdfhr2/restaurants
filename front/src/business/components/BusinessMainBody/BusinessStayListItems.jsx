/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';
import StayMoreInfo from './StayMoreInfo';

function BusinessStayList() {
  const [clicked, setClicked] = useState(false);

  const callClick = useCallback((event) => {
    event.stopPropagation();
    console.log('call');
  }, []);

  const stayingClick = useCallback((event) => {
    event.stopPropagation();
    console.log('staying');
  }, []);

  const checkClicked = useCallback(() => {
    setClicked(!clicked);
    console.log('click');
  }, [clicked]);

  return (
    <ul className="flexUl">
      <li className="flexLi" onClick={checkClicked}>
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
            <button type="button" className="callButton" onClick={callClick}>
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
      {clicked && <StayMoreInfo />}
    </ul>
  );
}

export default BusinessStayList;
