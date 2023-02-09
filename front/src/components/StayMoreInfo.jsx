import React from 'react';

function StayMoreInfo() {
  function stayCancle() {
    console.log('stayCancle');
  }
  return (
    <ul className="stayMoreInfo">
      <li>
        <ul>
          <li>현재 21분 웨이팅</li>
          <li>방문 03회</li>
        </ul>
        <ul>
          <li>최근 방문일</li>
          <li>2022.01.01</li>
        </ul>
        <ul>
          <li>
            <button type="button" className="stayCancle" onClick={stayCancle}>
              대기취소
            </button>
          </li>
          <li>대기취소</li>
        </ul>
      </li>
    </ul>
  );
}
export default StayMoreInfo;
