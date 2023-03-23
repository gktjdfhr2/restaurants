import DefaultLayout from '@customer/UI/Layouts/DefaultLayout';
import HeaderLayout from '@customer/UI/Layouts/HeaderLayout';
import HeaderBar from '@customer/components/HeaderBar';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Layout = () => {
  const scrollTop = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    (scrollTop.current as HTMLDivElement).scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <HeaderLayout>
        <HeaderBar />
      </HeaderLayout>
      <DefaultLayout id="scroll" ref={scrollTop}>
        <Outlet />
      </DefaultLayout>
    </>
  );
};

export default Layout;
