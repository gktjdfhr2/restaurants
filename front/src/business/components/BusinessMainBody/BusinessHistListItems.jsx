import React, { useState, useCallback } from 'react';
import HistMoreInfo from './HistMoreInfo';

function ProprietorHistList() {
  const [clicked, setClicked] = useState(false);

  const checkClicked = useCallback(() => {
    setClicked(!clicked);
    console.log('clicked');
  }, [clicked]);
  console.log(checkClicked);

  return (
    <div>
      histListItems
      {clicked && <HistMoreInfo />}
    </div>
  );
}

export default ProprietorHistList;
