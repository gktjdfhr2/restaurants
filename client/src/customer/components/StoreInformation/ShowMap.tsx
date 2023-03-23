import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const AddressDiv = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Address = styled.div`
  font-size: 20px;
`;

const CopyButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid gainsboro;
`;

const ShowMap = () => {
  const [info, setInfo]: any = useState();
  const [markers, setMarkers]: any = useState([]);
  const [map, setMap]: any = useState();
  //TODO: 가게이름, 주소 받아오기
  let store = '부산 동래구 석사북로 5 (사직동) 1층';

  useEffect(() => {
    if (!map) return;

    const address = new kakao.maps.services.Geocoder();
    address.addressSearch(store, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        var customOverlay = new kakao.maps.CustomOverlay({
          position: coords,
          content: `<div style="text-align:center; padding:16px ; background-color:white ; position: relative;
          bottom: 70px; border:1px solid gainsboro; border-radius:20px">${store}</div>`,
        });
        customOverlay.setMap(map);
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        // var infowindow = new kakao.maps.InfoWindow({});

        //   {
        //   content:
        //     '<div style="width:150px;text-align:center;padding:6px 0;  ">가게이름 받아오기</div>',
        // }
        // infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, [map]);

  return (
    <>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '350px',
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker: any) => (
          <>
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            ></MapMarker>
          </>
        ))}
      </Map>
      <AddressDiv>
        <Address>{store}</Address>
        <CopyButton
          onClick={() => {
            try {
              navigator.clipboard
                .writeText(store)
                .then(() => alert('클립보드에 복사되었습니다.'));
            } catch (error) {
              alert('클립보드 복사에 실패하였습니다.');
            }
          }}
        >
          주소 복사
        </CopyButton>
      </AddressDiv>
    </>
  );
};

export default ShowMap;
