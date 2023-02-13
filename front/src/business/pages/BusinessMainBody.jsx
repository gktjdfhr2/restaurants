import React, { useState, useCallback } from 'react';
import BusinessStayList from '../components/BusinessMainBody/BusinessStayList';
import BusinessHistList from '../components/BusinessMainBody/BusinessHistList';
import BusinessFooter from '../components/BusinessMainBody/BusinessFooter';

function BusinessMainBody() {
  const [showState, setShowState] = useState({
    stayListShow: true,
    histListShow: false,
  });
  const showStayButton = useCallback(() => {
    console.log('showStayButton');
    setShowState((prev) => ({
      ...prev,
      stayListShow: !showState.stayListShow,
    }));
  }, [showState.stayListShow]);

  const showHistButton = useCallback(() => {
    console.log('showHistButton');
    setShowState((prev) => ({
      ...prev,
      histListShow: !showState.histListShow,
    }));
  }, [showState.histListShow]);

  return (
    <section className="businessSection">
      <div className="BusinessListBox">
        <BusinessStayList
          stayListShow={showState.stayListShow}
          showStayButton={showStayButton}
        />
        <BusinessHistList
          histListShow={showState.histListShow}
          showHistButton={showHistButton}
        />
      </div>
      <BusinessFooter />
    </section>
  );
}

export default BusinessMainBody;
