import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function HistMoreInfo({ wating, visit, lastVisited }) {
  const stayBack = useCallback(() => {
    console.log('stayReturn');
  });

  return (
    <div className="business-customer-information-container more-information">
      <div className="waiting-more-information">
        <div>
          기다린 시간 <span className="yellow-point">{wating}분</span>
        </div>
        <div>
          방문 <span className="yellow-point">{visit}회</span>
        </div>
      </div>
      <div className="wating-last-visited">
        <div>최근 방문일</div>
        <div>{lastVisited}</div>
      </div>
      <button
        type="button"
        onClick={stayBack}
        className="customer-stay-back-button"
      >
        대기취소
      </button>
    </div>
  );
}
HistMoreInfo.propTypes = {
  wating: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
};
export default HistMoreInfo;
