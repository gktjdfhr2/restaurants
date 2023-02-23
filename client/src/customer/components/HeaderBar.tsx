import { Header } from '@customer/components/Header';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <Header.Container>
      <Link to="/">
        <Header.Logo title="맛집지도" />
      </Link>
      <Header.Navigation>
        <Link to="/Customer/SearchPage">
          <Header.Search />
        </Link>
        <Link to="/Customer/RemoteLinePage">
          <Header.RemoteLine />
        </Link>
        <Link to="/Customer/ReservationPage">
          <Header.Reservation />
        </Link>
        <Link to="/Customer/CustomerInformationPage">
          <Header.CustomerInformation />
        </Link>
      </Header.Navigation>
    </Header.Container>
  );
};

export default HeaderBar;
