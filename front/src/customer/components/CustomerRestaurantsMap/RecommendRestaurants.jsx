import React, { useState, useCallback } from 'react';

function RecommendRestaurants() {
  console.log('RecommendRestaurants');
  // eslint-disable-next-line operator-linebreak
  const [restaurantsClassification, setRestaurantsClassification] =
    useState('가까운 거리순');
  const recommendRestaurantsClassification = useCallback((event) => {
    setRestaurantsClassification(event.target.value);
  }, []);
  return (
    <section id="recommend-restaurants-section">
      <div id="recommend-restaurants-title">주변 맛집 다 모여라!</div>
      <form>
        <select
          id="restaurants-classification-tag"
          defaultValue={restaurantsClassification}
          onChange={recommendRestaurantsClassification}
        >
          <option value="가까운 거리순">가까운 거리순</option>
          <option value="리뷰 많은 순">리뷰 많은 순</option>
        </select>
      </form>
    </section>
  );
}
export default RecommendRestaurants;
