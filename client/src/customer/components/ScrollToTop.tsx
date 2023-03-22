import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  //TODO: 동작 안하는 에러 잡기
  const { pathname } = useLocation();
  console.log('ScrollToTop', pathname);

  useEffect(() => {
    console.log('uesEffect', pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
