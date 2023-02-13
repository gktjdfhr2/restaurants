import React from 'react';

function MostSearched() {
  console.log('MostSearched');
  return (
    <section id="most-searched-keywords-section">
      <div id="most-searched-keywords-title">인기 검색어</div>
      <ul id="most-searched-keywords-container">
        <li id="most-searched-keywords">추천1</li>
        <li id="most-searched-keywords">추천2</li>
        <li id="most-searched-keywords">추찬3</li>
        <li id="most-searched-keywords">서버에서 아이템 불러오기</li>
      </ul>
    </section>
  );
}
export default MostSearched;
