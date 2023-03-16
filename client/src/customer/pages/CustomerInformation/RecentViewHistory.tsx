import PageTitle from '@customer/UI/Form/PageTitle';
import ExhibitionItems from '@customer/UI/Form/ExhibitionItems';
import HistoryContainer from '@customer/UI/Form/HistoryContainer';

const RecentViewHistory = () => {
  return (
    <>
      <PageTitle>최근 본 매장</PageTitle>
      <HistoryContainer>
        <ExhibitionItems
          title="소우데스"
          score={3.9}
          countReview={303}
          condition="일식"
          address="사직동"
          distance={0.98}
          reservation={true}
          line={false}
        />
      </HistoryContainer>
    </>
  );
};

export default RecentViewHistory;
