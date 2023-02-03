import React from 'react';

function MostSearched() {
  console.log('MostSearched');
  return (
    <section id="mostSearchedList">
      <div id="recommendStoreListTitle">인기 검색어</div>
      <ul id="mostSearched">
        <li id="mostSearchedItems">추천1</li>
        <li id="mostSearchedItems">추천2</li>
        <li id="mostSearchedItems">추찬3</li>
        <li id="mostSearchedItems">서버에서 아이템 불러오기</li>
      </ul>
    </section>
  );
}
export default MostSearched;
