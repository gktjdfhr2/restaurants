import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function kakaoMap() {
  return (
    <Map center={{ lat: 33.5563, lng: 126.79581 }}>
      <MapMarker position={{ lat: 33.55635, lag: 126.79581 }}>
        <div style={{ color: '#000' }}>Hello world!</div>
      </MapMarker>
    </Map>
  );
}

export default kakaoMap;
