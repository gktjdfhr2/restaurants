import HeaderContainer from '@UI/Form/Header/HeaderContainer';
import HeaderLogo from '@UI/Form/Header/HeaderLogo';
import HeaderNavigations from '@UI/Form/Header/HeaderNavigations';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Logo 맛집지도</HeaderLogo>
      <HeaderNavigations>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </HeaderNavigations>
    </HeaderContainer>
  );
};
export default Header;
