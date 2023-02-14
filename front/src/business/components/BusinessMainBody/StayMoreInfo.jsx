import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function StayMoreInfo({ wating, visit, lastVisited }) {
  const stayCancle = useCallback(() => {
    console.log('stayCancle');
  }, []);
  console.log(stayCancle);

  return (
    <div className="business-customer-information-container">
      <div>
        {wating} {visit} {lastVisited}
      </div>
    </div>
  );
}
StayMoreInfo.propTypes = {
  wating: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
};
export default StayMoreInfo;
