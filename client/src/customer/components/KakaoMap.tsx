import { useCallback, useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import TextInput from '@customer/UI/Form/TextInput';
import SearchButton from '@customer/UI/Form/SearchButton';
import ResetButton from '@customer/UI/Form/ResetButton';

const KeywordInput = styled(TextInput)`
  padding: 0 40px;
`;
const SearchForm = styled.form`
  margin-top: 33px;
  position: relative;
  width: 100%;
  height: 46px;
`;

const KakaoMap = () => {
  const [location, setLocation] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [keyword, setKeyword] = useState('');

  const [info, setInfo]: any = useState();
  const [markers, setMarkers]: any = useState([]);
  const [map, setMap]: any = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation(() => ({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
    });
  }, []);

  const clickEvent = useCallback(
    (event: any) => {
      event.preventDefault();
      console.log('event');
      if (!map) return;
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(keyword, (data: any, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          let markers: any = [];

          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
              // content: `<div style="text-align:center; padding:16px ; background-color:white ; position: relative;
              // bottom: 70px; border:1px solid gainsboro; border-radius:20px">${data[i].place_name}</div>`,
            });
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      });
    },
    [keyword]
  );

  const keywordChangeHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    },
    [keyword]
  );

  return (
    <>
      <SearchForm onSubmit={(event) => clickEvent(event)}>
        <SearchButton type="submit" />
        <KeywordInput
          placeholder="검색어를 입력해주세요"
          autoComplete="off"
          autoFocus={true}
          value={keyword}
          onChange={keywordChangeHandle}
        />
        {keyword && (
          <ResetButton
            onClick={() => {
              setKeyword('');
            }}
          />
        )}
      </SearchForm>

      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: location.lat,
          lng: location.lng,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px',
          overflow: 'hidden',
        }}
        level={3} // 지도의 확대 레벨
        onCreate={setMap}
      >
        {console.log(markers)}
        {markers.map((marker: any) => (
          <>
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div
                  style={{
                    width: '240px',
                    height: '60px',
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => setInfo()}
                >
                  {marker.content}
                </div>
              )}
            </MapMarker>
          </>
        ))}
      </Map>
    </>
  );
};
export default KakaoMap;
