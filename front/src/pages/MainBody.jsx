import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function MainBody() {
  console.log('mainBody');
  // eslint-disable-next-line operator-linebreak
  const [restaurantsClassification, setRestaurantsClassification] =
    useState('가까운 거리순');
  const recommendRestaurantsClassification = (event) => {
    setRestaurantsClassification(event.target.value);
  };
  return (
    <>
      <Map center={{ lat: 33.5563, lng: 126.79581 }}>
        <MapMarker position={{ lat: 33.55635, lag: 126.79581 }}>
          <div style={{ color: '#000' }}>Hello world!</div>
        </MapMarker>
      </Map>

      <section id="recommendRestaurants">
        <div id="recommendRestaurantsTitle">주변 맛집 다 모여라!</div>
        <form>
          <select
            id="restaurantsClassificationTag"
            defaultValue={restaurantsClassification}
            onChange={recommendRestaurantsClassification}
          >
            <option value="가까운 거리순">가까운 거리순</option>
            <option value="리뷰 많은 순">리뷰 많은 순</option>
          </select>
        </form>
      </section>
    </>
  );
}

export default MainBody;
