import { Header } from '@customer/components/Header';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <Header.Container>
      <Link to="/">
        <Header.Logo title="맛집지도" />
      </Link>
      <Header.Navigation>
        <Link to="/customer/SearchPage">
          <Header.Search />
        </Link>
        <Link to="/customer/RemoteLinePage">
          <Header.RemoteLine />
        </Link>
        <Link to="/customer/ReservationPage">
          <Header.Reservation />
        </Link>
        <Link to="/customer/CustomerInformationPage">
          <Header.CustomerInformation />
        </Link>
      </Header.Navigation>
    </Header.Container>
  );
};

export default HeaderBar;
