/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useCallback } from 'react';
import HistMoreInfo from './HistMoreInfo';

function ProprietorHistList() {
  const [clicked, setClicked] = useState(false);

  const checkClicked = useCallback(() => {
    setClicked(!clicked);
    console.log('clicked');
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
            <div className="callButton">호출</div>
          </li>
          <li className="bottomLi recentCall">18 : 39</li>
        </ul>
        <ul>
          <li className="topLi">
            <div className="stayCheckButton">대기</div>
          </li>
          <li className="bottomLi stayState">18 : 40</li>
        </ul>
      </li>
      {clicked && <HistMoreInfo />}
    </ul>
  );
}

export default ProprietorHistList;
