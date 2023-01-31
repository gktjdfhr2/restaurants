import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function MainBody() {
  console.log('mainBody');
  return (
    <>
      <Map center={{ lat: 33.5563, lng: 126.79581 }}>
        <MapMarker position={{ lat: 33.55635, lag: 126.79581 }}>
          <div style={{ color: '#000' }}>Hello world!</div>
        </MapMarker>
      </Map>

      <section>
        <div id="dummy">주변 맛집 추천이 들어올 섹션</div>
      </section>
    </>
  );
}

export default MainBody;
