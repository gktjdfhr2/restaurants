import PageTitle from '@customer/UI/Form/PageTitle';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';
import { useState } from 'react';
import SearchResultContainer from '@customer/UI/Form/SearchResultContainer';
import ExhibitionItem from '@customer/UI/Form/ExhibitionItem';
import MediumContainer from '@customer/UI/Form/MediumContainer';

const LineHistory = () => {
  const [selectButton, setSelectButton] = useState({
    line: true,
    cancel: false,
  });

  return (
    <>
      <PageTitle>줄서기 내역</PageTitle>
      <MediumContainer>
        <ToggleMenuButton
          selectFilter={selectButton.line}
          onClick={() => setSelectButton({ line: true, cancel: false })}
        >
          이용예정 / 완료
        </ToggleMenuButton>
        <ToggleMenuButton
          selectFilter={selectButton.cancel}
          onClick={() => setSelectButton({ line: false, cancel: true })}
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
            line={true}
          />
          <ExhibitionItem
            title="소우데스"
            score={3.5}
            countReview={33}
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

export default LineHistory;
