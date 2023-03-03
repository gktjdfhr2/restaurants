import { Header } from '@customer/components/Header';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <Header.Container>
      <Link to="/">
        <Header.Logo title="맛집지도" />
      </Link>
      <Header.Navigation>
        <Link to="/customer/Search">
          <Header.Search />
        </Link>
        <Link to="/customer/RemoteLinePage">
          <Header.NavigationButton title="원격 줄서기" />
        </Link>
        <Link to="/customer/ReservationPage">
          <Header.NavigationButton title="즉시 예약" />
        </Link>
        <Link to="/customer/InformationPage">
          <Header.NavigationButton title="내정보" />
        </Link>
      </Header.Navigation>
    </Header.Container>
  );
};

export default HeaderBar;
