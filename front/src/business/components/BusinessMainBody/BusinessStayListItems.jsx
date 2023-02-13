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
  console.log(checkClicked, stayingClick, callClick);

  return (
    <div>
      stayListItems
      {clicked && <StayMoreInfo />}
    </div>
  );
}

export default BusinessStayList;
