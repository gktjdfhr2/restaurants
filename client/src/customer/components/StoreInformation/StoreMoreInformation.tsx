import styled from 'styled-components';
import ReviewScore from '@customer/UI/Form/ReviewScore';
import GrayDIv from '@customer/UI/Form/GrayDIv';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';
import { Link } from 'react-router-dom';

const InformationContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

const StoreAddress = styled(GrayDIv)`
  display: flex;
  justify-content: space-between;
`;

const ShowMap = styled.button`
  background-color: white;
  border: none;
  margin-right: 10px;
  font-weight: bold;
`;

const StoreMoreInformation = (props: {
  storeName: string;
  storeAddress: string;
  reviewScore: number;
}) => {
  console.log('StoreMoreInformation');
  //TODO: Link로 보내지 말고 페이지에서 띄우기
  return (
    <InformationContainer>
      <StoreInformationTitle>{props.storeName}</StoreInformationTitle>
      <StoreAddress>
        {props.storeAddress}
        <Link to="ShowMap">
          <ShowMap>지도보기 &gt;</ShowMap>
        </Link>
      </StoreAddress>
      <ReviewScore reviewScore={props.reviewScore} />
    </InformationContainer>
  );
};

export default StoreMoreInformation;
