import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';
import { Outlet } from 'react-router-dom';
import KakaoMap from '@customer/components/KakaoMap';
const Restaurants = () => {
  return (
    <>
      <KakaoMap />
    </>
  );
};

export default Restaurants;
