import React, { useState, useCallback } from 'react';
import HistMoreInfo from './HistMoreInfo';

function ProprietorHistList() {
  const [clicked, setClicked] = useState(false);

  const showMoreInformation = useCallback(() => {
    setClicked(!clicked);
    console.log('clicked');
  }, [clicked]);
  console.log(showMoreInformation);

  return (
    <div>
      histListItems
      {clicked && <HistMoreInfo />}
    </div>
  );
}

export default ProprietorHistList;
