import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import ScrollToTop from '@customer/components/ScrollToTop';

const Layout = () => {
  // const test = useRef<HTMLDivElement>(null);

  // const { pathname } = useLocation();
  // // console.log('ScrollToTop', pathname);

  // useEffect(() => {
  //   console.log('test', pathname);
  //   (test.current as HTMLDivElement).scrollTo(0, 0);
  // }, [pathname]);
  return (
    // <div ref={test} style={{ height: '100%' }}>
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout>
        <ScrollToTop />
        <Outlet />
      </DefaultLayout>
    </>
    // </div>
  );
};

export default Layout;
