import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import styled from 'styled-components';
import MoreInformationButton from '@customer/UI/Form/MoreInformationButton';
import MenuItem from '@customer/UI/Form/MenuItem';

const StoreMenuContainer = styled.div`
  width: 100%;
  height: 600px;
  padding: 20px;
  border-bottom: 10px solid gainsboro;
`;

const StoreMenu = () => {
  return (
    <StoreMenuContainer>
      <StoreInformationTitle>전체 메뉴</StoreInformationTitle>
      <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
      <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
      <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
      <MoreInformationButton>메뉴 전체보기 &gt;</MoreInformationButton>
    </StoreMenuContainer>
  );
};

export default StoreMenu;
