import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function StayMoreInformation({ waitingTime, visit, lastVisited }) {
  const stayCancle = useCallback(() => {
    console.log('stayCancle');
  }, []);
  return (
    <div className="business-customer-information-container more-information">
      <div className="waiting-more-information">
        <div>
          현재 &nbsp;
          <span className="yellow-point">{waitingTime}분</span>
          &nbsp; 웨이팅 중
        </div>
        <div>
          방문 &nbsp;
          <span className="yellow-point">{visit}회</span>
        </div>
      </div>
      <div className="waiting-last-visited">
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
StayMoreInformation.propTypes = {
  waitingTime: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
};
export default StayMoreInformation;
