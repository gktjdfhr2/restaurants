import React from 'react';

function RecommendStoreList() {
  console.log('RecommendStoreList');
  return (
    <section id="recent-search-section">
      <div id="recent-search-title">추천 키워드</div>
      <ul id="recent-search-container">
        <li id="recent-search-keywords">추천1</li>
        <li id="recent-search-keywords">추천2</li>
        <li id="recent-search-keywords">추찬3</li>
        <li id="recent-search-keywords">서버에서 아이템 불러오기</li>
      </ul>
    </section>
  );
}
export default RecommendStoreList;
