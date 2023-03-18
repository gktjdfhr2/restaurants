import styled from 'styled-components';

const StoreMenuContainer = styled.div`
  width: 100%;
  height: 600px;
  padding: 20px;
  border-bottom: 10px solid gainsboro;
`;

const PageTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto 50px auto;
`;

const MenuItems = styled.div`
  display: flex;
  width: 100%;
  height: 100px;   
  justify-content: space-between;
  align-items: center;
  margin :30px 0;
}
`;
const MenuPicture = styled.div`
  width: 150px;
  height: 100px;
  background: url(/src/assets/images/placeholder.png) no-repeat;
  background-size: 150px 100px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const MenuInformationContainer = styled.div`
  flex-grow: 1;
  height: 100px;
  padding: 10px;
`;
const MenuTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  height: 20px;
`;
const MenuPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  height: 60px;
  color: red;
  display: flex;
  align-items: center;
`;

const MoreMenuButton = styled.button`
  width: 180px;
  height: 60px;
  border: 1px solid gainsboro;
  border-radius: 25px;
  font-size: 20px;
  background-color: white;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoreMenu = () => {
  return (
    <StoreMenuContainer>
      <PageTitle>전체 메뉴</PageTitle>
      <MenuItems>
        <MenuPicture />
        <MenuInformationContainer>
          <MenuTitle>눈꽃 갈비살 (100g)</MenuTitle>
          <MenuPrice>13,900원</MenuPrice>
        </MenuInformationContainer>
      </MenuItems>
      <MenuItems>
        <MenuPicture />
        <MenuInformationContainer>
          <MenuTitle>눈꽃 갈비살 (100g)</MenuTitle>
          <MenuPrice>13,900원</MenuPrice>
        </MenuInformationContainer>
      </MenuItems>
      <MenuItems>
        <MenuPicture />
        <MenuInformationContainer>
          <MenuTitle>눈꽃 갈비살 (100g)</MenuTitle>
          <MenuPrice>13,900원</MenuPrice>
        </MenuInformationContainer>
      </MenuItems>

      <MoreMenuButton>메뉴 전체보기 &gt;</MoreMenuButton>
    </StoreMenuContainer>
  );
};

export default StoreMenu;
