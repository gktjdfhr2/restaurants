import { Header } from '@customer/components/Header';
import { Link } from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';

const HeaderBar = () => {
  const [cookies] = useCookies(['token']);
  return (
    <CookiesProvider>
      <Header.Container>
        <Link to="/">
          <Header.Logo title="맛집지도" />
        </Link>
        <Header.Navigation>
          <Link to="customer/Search">
            <Header.Search />
          </Link>
          {cookies.token ? (
            <Link to="customer/InformationPage">
              <Header.NavigationButton title="내정보" />
            </Link>
          ) : (
            <Link to="customer/SignIn">
              <Header.NavigationButton title="로그인" />
            </Link>
          )}
          <Link to="customer/RecentViewHistory">
            <Header.NavigationButton title="최근 본 매장" />
          </Link>
        </Header.Navigation>
      </Header.Container>
    </CookiesProvider>
  );
};

export default HeaderBar;
