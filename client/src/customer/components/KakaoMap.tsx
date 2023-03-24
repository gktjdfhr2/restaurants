import { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  const [location, setLocation] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation(() => ({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
    });
  }, []);

  return (
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
    />
  );
};
export default KakaoMap;
