import styled from 'styled-components';
import Button from '@customer/UI/Form/Button';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import { FC } from 'react';

const KeywordsContainer: FC<{ children: any }> = ({ children }) => {
  styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 36px;
  `;
  return <>{children}</>;
};

const Keyword = styled.div`
  display: inline-block;
  height: 36px;
  color: black;
  text-align: center;
  width: max-content;
  background-color: gainsboro;
  padding: 10px;
  border-radius: 5px 0 0 5px;
`;
const NoneKeyword = styled(Keyword)`
  border-radius: 5px;
`;
const RemoveButton = styled(Button)`
  width: 20px;
  height: 36px;
  color: black;
  padding: 0;
  border-radius: 0 5px 5px 0;
  background-color: gainsboro;
  opacity: 1;
  font-weight: normal;
`;

const KeywordSortDiv = styled(ButtonSortDiv)`
  width: max-content;
  height: 36px;
  display: flex;
  margin: 0 10px 0 0;
  justify-content: flex-between;
`;

const RecentKeywords = (props: { keyWords: Array<String> }) => {
  //TODO: 최근 검색어 서버에서 불러와 4개까지 띄우기
  return (
    <KeywordsContainer>
      {props.keyWords.length === 0 ? (
        <KeywordSortDiv>
          <NoneKeyword>최근검색어 내역이 없습니다.</NoneKeyword>
        </KeywordSortDiv>
      ) : (
        props.keyWords.forEach((value, index) => {
          <KeywordSortDiv>
            <Keyword>{value}</Keyword>
            <RemoveButton title="X" />
          </KeywordSortDiv>;
        })
      )}
      )
    </KeywordsContainer>
  );
};

export default RecentKeywords;
