import styled from 'styled-components';

const MenuItemContainer = styled.div`
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
const MenuItem = (props: { menuTitle: string; MenuPrice: string }) => {
  return (
    <MenuItemContainer>
      <MenuPicture />
      <MenuInformationContainer>
        <MenuTitle>{props.menuTitle}</MenuTitle>
        <MenuPrice>{props.MenuPrice}원</MenuPrice>
      </MenuInformationContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
