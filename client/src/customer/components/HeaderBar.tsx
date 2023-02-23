import { Header } from '@customer/components/Header';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <Header.Container>
      <Link to="/">
        <Header.Logo title="맛집지도" />
      </Link>
      {/* <Header.Logo title="맛집지도" /> */}
      <Header.Navigation>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Header.Navigation>
    </Header.Container>
  );
};

export default HeaderBar;
