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
      histListShow: !showState.histListShow,
    }));
  }, [showState.stayListShow]);

  const showHistButton = useCallback(() => {
    console.log('showHistButton');
    setShowState((prev) => ({
      ...prev,
      histListShow: !showState.histListShow,
      stayListShow: !showState.stayListShow,
    }));
  }, [showState.histListShow]);

  return (
    <section className="business-show-customer-section">
      <div className="business-show-customer-container">
        <div
          className={
            showState.stayListShow
              ? 'customer-stay-information'
              : 'customer-stay-information-show'
          }
        >
          <BusinessStayList
            stayListShow={showState.stayListShow}
            showStayButton={showStayButton}
          />
        </div>
        <div
          className={
            showState.histListShow
              ? 'customer-history-information'
              : 'customer-history-information-show'
          }
        >
          <BusinessHistList
            histListShow={showState.histListShow}
            showHistButton={showHistButton}
          />
        </div>
      </div>
      <BusinessFooter />
    </section>
  );
}

export default BusinessMainBody;
