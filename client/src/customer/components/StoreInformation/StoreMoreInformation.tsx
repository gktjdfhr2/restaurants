import styled from 'styled-components';
import ReviewScore from '@customer/UI/Form/ReviewScore';

const InformationContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
`;
const StoreTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const Distance = styled.div`
  margin: 2px 0;
  color: gray;
`;

const StoreMoreInformation = (props: {
  storeName: string;
  storeAddress: string;
  reviewScore: number;
}) => {
  return (
    <InformationContainer>
      <StoreTitle>{props.storeName}</StoreTitle>
      <Distance>{props.storeAddress}</Distance>
      <ReviewScore reviewScore={props.reviewScore} />
    </InformationContainer>
  );
};

export default StoreMoreInformation;
