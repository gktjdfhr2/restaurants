import React, { useState } from 'react';
import RecommendStoreList from '../pages/RecommendStoreList';

function UserSearch() {
  console.log('userSearch');
  const [searchKeyword, setSearchKeyword] = useState('');

  const searchKeywordHandle = (event) => {
    setSearchKeyword(event.target.value);
  };
  const searchSubmitHandle = (event) => {
    event.preventDefault();
    console.log(searchKeyword);
  };

  return (
    <>
      {' '}
      <section id="searchForm">
        <div id="searchTextWrap">
          <form onSubmit={searchSubmitHandle}>
            <input
              type="text"
              id="searchText"
              placeholder="가게명 검색"
              value={searchKeyword}
              onChange={searchKeywordHandle}
            />
            <button type="submit" id="searchSubmitBtn">
              검색
            </button>
          </form>
        </div>
      </section>
      <section>
        <RecommendStoreList />
      </section>
    </>
  );
}

export default UserSearch;
