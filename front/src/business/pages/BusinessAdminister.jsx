import React, { useState, useCallback } from 'react';
import BusinessStay from '../components/BusinessAdminister/BusinessStay';
import BusinessHistory from '../components/BusinessAdminister/BusinessHistory';
import BusinessFooter from '../components/BusinessAdminister/BusinessFooter';

function BusinessAdminister() {
  const [showState, setShowState] = useState({
    stayShowToggle: true,
    historyShowToggle: false,
  });

  const showStayButton = useCallback(() => {
    console.log('showStayButton');
    setShowState((prev) => ({
      ...prev,
      stayShowToggle: !showState.stayShowToggle,
      historyShowToggle: !showState.historyShowToggle,
    }));
  }, [showState.stayShowToggle]);

  const showHistoryButton = useCallback(() => {
    console.log('showHistoryButton');
    setShowState((prev) => ({
      ...prev,
      historyShowToggle: !showState.historyShowToggle,
      stayShowToggle: !showState.stayShowToggle,
    }));
  }, [showState.historyShowToggle]);

  return (
    <section className="business-show-customer-section">
      <div className="business-show-customer-container">
        <div
          className={
            showState.stayShowToggle
              ? 'customer-stay-information'
              : 'customer-stay-information-show'
          }
        >
          <BusinessStay
            stayShowToggle={showState.stayShowToggle}
            showStayButton={showStayButton}
          />
        </div>
        <div
          className={
            showState.historyShowToggle
              ? 'customer-history-information'
              : 'customer-history-information-show'
          }
        >
          <BusinessHistory
            historyShowToggle={showState.historyShowToggle}
            showHistoryButton={showHistoryButton}
          />
        </div>
      </div>
      <BusinessFooter />
    </section>
  );
}

export default BusinessAdminister;
