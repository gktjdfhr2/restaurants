import styled from 'styled-components';
import MenuItem from '@customer/UI/Form/MenuItem';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import StorePrevButton from '@customer/UI/Form/StorePrevButton';
import { useNavigate } from 'react-router-dom';

const StoreMenuContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const MoreMenu = () => {
  const navigation = useNavigate();
  return (
    <MediumContainer>
      <StorePrevButton onClick={() => navigation(-1)}>
        &lt; 전체 메뉴
      </StorePrevButton>
      <StoreMenuContainer>
        <StoreInformationTitle>고기</StoreInformationTitle>
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <StoreInformationTitle>고기</StoreInformationTitle>
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <StoreInformationTitle>고기</StoreInformationTitle>
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <StoreInformationTitle>고기</StoreInformationTitle>
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
        <MenuItem menuTitle="눈꽃갈비살 (100g)" MenuPrice="13,900" />
      </StoreMenuContainer>
    </MediumContainer>
  );
};

export default MoreMenu;
