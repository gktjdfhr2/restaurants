import React, { useState, useCallback } from 'react';

function BusinessCalendar() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = `0${now.getMonth() + 1}`.slice(-2);
  const dd = `0${now.getDate()}`.slice(-2);
  const formatDate = `${yyyy}-${mm}-${dd}`;

  const [nowDate, setNowDate] = useState(formatDate);

  const changeCalendarDate = useCallback(
    (event) => {
      setNowDate(event.target.value);
      console.log(event.target.value);
    },
    [nowDate],
  );

  return (
    <span className="business-header-container ">
      <input
        type="date"
        id="business-header-date"
        value={nowDate}
        onChange={changeCalendarDate}
      />
    </span>
  );
}

export default BusinessCalendar;
