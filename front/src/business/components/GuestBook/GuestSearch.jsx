import React from 'react';

function GuestSearch() {
  return (
    <div className="guest-search-container">
      <input
        type="text"
        className="guest-search-keyword"
        placeholder="검색어를 입력해주세요"
      />
      <input type="button" className="guest-search-button" />
    </div>
  );
}

export default GuestSearch;
