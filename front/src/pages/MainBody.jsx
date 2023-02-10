import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import RecommendRestaurants from '../components/mainBody/RecommendRestaurants';

function MainBody() {
  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        level={3} // 지도의 확대 레벨
        draggable={false}
      >
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          position={{
            // 인포윈도우가 표시될 위치입니다
            lat: 33.450701,
            lng: 126.570667,
          }}
        >
          {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
          {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
          <div style={{ padding: '5px', color: '#000' }}>현위치</div>
        </MapMarker>
      </Map>
      <RecommendRestaurants />
    </>
  );
}

export default MainBody;
