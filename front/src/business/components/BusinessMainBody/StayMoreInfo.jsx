import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function StayMoreInfo({ wating, visit, lastVisited }) {
  const stayCancle = useCallback(() => {
    console.log('stayCancle');
  }, []);
  return (
    <div className="business-customer-information-container more-information">
      <div className="waiting-more-information">
        <div>
          현재 <span className="yellow-point">{wating}분</span> 웨이팅 중
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
        onClick={stayCancle}
        className="customer-stay-cancle-button"
      >
        대기취소
      </button>
    </div>
  );
}
StayMoreInfo.propTypes = {
  wating: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
};
export default StayMoreInfo;
