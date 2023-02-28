import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import KakaoMap from '@customer/components/KakaoMap';
import HeaderBar from '@customer/components/HeaderBar';
import { Outlet } from 'react-router-dom';

const Restaurants = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  );
};

export default Restaurants;
