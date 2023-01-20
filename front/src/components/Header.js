import React from 'react';

const Header =
  () => {
    console.log(
      'header',
    );
    //TODO: 메인 아이콘클릭할 경우 a 태그로 index.js로 이동하는것아 아닌 props로 Restaurants.js에서 메인화면 상태로 보여주는 state를 반환해서 해야함.
    return (
      <header>
        <section>
          <h2>
            <a href="./index.js">
              맛집지도
            </a>
          </h2>
        </section>
      </header>
    );
  };

export default Header;
