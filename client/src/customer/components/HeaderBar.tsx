import { Header } from '@customer/components/Header';
import { Link } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const HeaderBar = () => {
  return (
    <CookiesProvider>
      <Header.Container>
        <Link to="/">
          <Header.Logo title="맛집지도" />
        </Link>
        <Header.Navigation>
          <Link to="/customer/InformationPage">
            <Header.NavigationButton title="내정보" />
          </Link>
          <Link to="/customer/Search">
            <Header.Search />
          </Link>
        </Header.Navigation>
      </Header.Container>
    </CookiesProvider>
  );
};

export default HeaderBar;
