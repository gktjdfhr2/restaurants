import React from 'react';
import RecommendRestaurants from '../components/CustomerRestaurantsMap/RecommendRestaurants';
import KakaoMap from '../components/CustomerRestaurantsMap/KakaoMap';

function MainBody() {
  return (
    <>
      <KakaoMap />
      <RecommendRestaurants />
    </>
  );
}

export default MainBody;
