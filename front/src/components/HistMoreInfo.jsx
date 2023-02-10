import React, { useCallback } from 'react';

function HistMoreInfo() {
  const stayback = useCallback(() => {
    console.log('stayReturn');
  });

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
            <button type="button" className="stayBack" onClick={stayback}>
              대기복귀
            </button>
          </li>
          <li>대기복귀</li>
        </ul>
      </li>
    </ul>
  );
}
export default HistMoreInfo;
