import PageTitle from '@customer/UI/Form/PageTitle';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';
import { useState } from 'react';
import SearchResultContainer from '@customer/UI/Form/SearchResultContainer';
import ExhibitionItem from '@customer/UI/Form/ExhibitionItem';
import MediumContainer from '@customer/UI/Form/MediumContainer';

const ReservationHistory = () => {
  type ReservationHistoryTab = 'RESERVATION' | 'CANCEL';

  const [selectButton, setSelectButton] =
    useState<ReservationHistoryTab>('RESERVATION');

  return (
    <>
      <PageTitle>예약 내역</PageTitle>
      <MediumContainer>
        <ToggleMenuButton
          selectFilter={selectButton === 'RESERVATION'}
          onClick={() => setSelectButton(() => 'RESERVATION')}
        >
          이용예정 / 완료
        </ToggleMenuButton>
        <ToggleMenuButton
          selectFilter={selectButton === 'CANCEL'}
          onClick={() => setSelectButton(() => 'CANCEL')}
        >
          취소 / 노쇼
        </ToggleMenuButton>
        <SearchResultContainer>
          <ExhibitionItem
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
      </MediumContainer>
    </>
  );
};

export default ReservationHistory;
