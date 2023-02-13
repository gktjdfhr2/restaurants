import React, { useState, useCallback } from 'react';
import RecommendStoreList from '../components/CustomerSearch/RecommendStoreList';
import MostSearched from '../components/CustomerSearch/MostSearched';

function UserSearch() {
  console.log('userSearch');
  const [searchKeyword, setSearchKeyword] = useState('');

  const searchKeywordHandle = useCallback(
    (event) => {
      setSearchKeyword(event.target.value);
    },
    [searchKeyword],
  );
  const searchSubmitHandle = (event) => {
    event.preventDefault();
    console.log(searchKeyword);
  };

  return (
    <>
      <section id="search-container">
        <div id="search-form-wrap">
          <form onSubmit={searchSubmitHandle}>
            <input
              type="text"
              id="search-keyword"
              placeholder="가게명 검색"
              value={searchKeyword}
              onChange={searchKeywordHandle}
            />
            <button type="submit" id="search-submit-button">
              검색
            </button>
          </form>
          <ul id="recent-search-container">
            <li id="recent-search-keywords">
              서버에서 아이템 불러오기
              <button type="button">X</button>
            </li>
            <li id="recent-search-keywords">
              검색어2
              <button type="button">X</button>
            </li>
            <li id="recent-search-keywords">
              검색어3
              <button type="button">X</button>
            </li>
            <li id="recent-search-keywords">
              검색어4
              <button type="button">X</button>
            </li>
            <li id="recent-search-keywords">
              검색어5
              <button type="button">X</button>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <RecommendStoreList />
      </section>
      <section>
        <MostSearched />
      </section>
    </>
  );
}

export default UserSearch;
