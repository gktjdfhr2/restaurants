import styled from 'styled-components';
import ReviewScore from '@customer/UI/Form/ReviewScore';
import GrayDIv from '@customer/UI/Form/GrayDIv';
import StoreInformationTitle from '@customer/UI/Form/StoreInformationTitle';

const InformationContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;

const StoreMoreInformation = (props: {
  storeName: string;
  storeAddress: string;
  reviewScore: number;
}) => {
  return (
    <InformationContainer>
      <StoreInformationTitle>{props.storeName}</StoreInformationTitle>
      <GrayDIv>{props.storeAddress}</GrayDIv>
      <ReviewScore reviewScore={props.reviewScore} />
    </InformationContainer>
  );
};

export default StoreMoreInformation;
