import PageTitle from '@customer/UI/Form/PageTitle';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';
import { useState } from 'react';
import SearchResultContainer from '@customer/UI/Form/SearchResultContainer';
import ExhibitionItems from '@customer/UI/Form/ExhibitionItems';
import HistoryContainer from '@customer/UI/Form/HistoryContainer';

const ReservationHistory = () => {
  const [selectButton, setSelectButton] = useState({
    reservation: true,
    cancel: false,
  });

  return (
    <>
      <PageTitle>예약 내역</PageTitle>
      <HistoryContainer>
        <ToggleMenuButton
          selectFilter={selectButton.reservation}
          onClick={() => setSelectButton({ reservation: true, cancel: false })}
        >
          이용예정 / 완료
        </ToggleMenuButton>
        <ToggleMenuButton
          selectFilter={selectButton.cancel}
          onClick={() => setSelectButton({ reservation: false, cancel: true })}
        >
          취소 / 노쇼
        </ToggleMenuButton>
        <SearchResultContainer>
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
        </SearchResultContainer>
      </HistoryContainer>
    </>
  );
};

export default ReservationHistory;
