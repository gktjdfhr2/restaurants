import React, { useState } from 'react';
import RecommendStoreList from '../components/RecommendStoreList';
import MostSearched from '../components/MostSearched';

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
          <ul id="recentSearch">
            <li id="recentSearchItems">
              서버에서 아이템 불러오기
              <button type="button">X</button>
            </li>
            <li id="recentSearchItems">
              검색어2
              <button type="button">X</button>
            </li>
            <li id="recentSearchItems">
              검색어3
              <button type="button">X</button>
            </li>
            <li id="recentSearchItems">
              검색어4
              <button type="button">X</button>
            </li>
            <li id="recentSearchItems">
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
