import styled from 'styled-components';
import ReviewScore from '@customer/UI/Form/ReviewScore';
import GrayDIv from '@customer/UI/Form/GrayDIv';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import ResetButton from '@customer/UI/Form/ResetButton';

const AddressDiv = styled.div`
  width: inherit;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 11;
  background-color: white;
`;
const ResetDiv = styled.div`
  position: relative;
`;

const CloseButton = styled(ResetButton)`
  z-index: 10;
  top: 25px;
`;
const MapContainer = styled.div`
  width: 80%;
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
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);

  div {
    opacity: 1;
  }
`;
const InformationContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

const StoreAddress = styled(GrayDIv)`
  display: flex;
  justify-content: space-between;
  position: sticky;
`;

const ShowMap = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  font-weight: bold;
`;

const StoreMoreInformation = (props: {
  storeName: string;
  storeAddress: string;
  reviewScore: number;
}) => {
  console.log('StoreMoreInformation');
  //TODO: Link로 보내지 말고 페이지에서 띄우기

  const [info, setInfo]: any = useState();
  const [markers, setMarkers]: any = useState([]);
  const [map, setMap]: any = useState();
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // axios.
    if (!map) return;

    const address = new kakao.maps.services.Geocoder();
    address.addressSearch(
      props.storeAddress,
      function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          // var marker = new kakao.maps.Marker({
          //   map: map,
          //   position: coords,
          // });

          var customOverlay = new kakao.maps.CustomOverlay({
            position: coords,
            content: `<div style="text-align:center; padding:16px ; background-color:white ; position: relative;
          bottom: 70px; border:1px solid gainsboro; border-radius:20px">${props.storeAddress}</div>`,
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
      }
    );
  }, [map]);
  return (
    <InformationContainer>
      <StoreInformationTitle>{props.storeName}</StoreInformationTitle>
      <StoreAddress>
        {props.storeAddress}

        <ShowMap onClick={() => setShowMap(true)}>지도보기 &gt;</ShowMap>
        {showMap && (
          <DarkBackground>
            <MapContainer>
              <ResetDiv>
                <CloseButton onClick={() => setShowMap(false)} />
                <Map // 로드뷰를 표시할 Container
                  center={{
                    lat: 37.566826,
                    lng: 126.9786567,
                  }}
                  style={{
                    width: '100%',
                    height: '350px',
                    position: 'inherit',
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
              </ResetDiv>
              <AddressDiv>
                <Address>{props.storeAddress}</Address>
                <CopyButton
                  onClick={() => {
                    try {
                      navigator.clipboard
                        .writeText(props.storeAddress)
                        .then(() => alert('클립보드에 복사되었습니다.'));
                    } catch (error) {
                      alert('클립보드 복사에 실패하였습니다.');
                    }
                  }}
                >
                  주소 복사
                </CopyButton>
              </AddressDiv>
            </MapContainer>
          </DarkBackground>
        )}
      </StoreAddress>
      <ReviewScore reviewScore={props.reviewScore} />
    </InformationContainer>
  );
};

export default StoreMoreInformation;
