import React from 'react';

function RecommendStoreList() {
  console.log('RecommendStoreList');
  return (
    <section id="recentSearchList">
      <div id="recentSearchTitle">추천 키워드</div>
      <ul id="recentSearch">
        <li id="recentSearchItems">추천1</li>
        <li id="recentSearchItems">추천2</li>
        <li id="recentSearchItems">추찬3</li>
        <li id="recentSearchItems">서버에서 아이템 불러오기</li>
      </ul>
    </section>
  );
}
export default RecommendStoreList;
