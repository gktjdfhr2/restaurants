import styled from 'styled-components';
import PageTitle from '@customer/UI/Form/PageTitle';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';

const Title = styled(PageTitle)`
  text-align: left;
  margin: 35px auto;
  font-size: 24px;
`;

const KeywordsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 36px;
`;

const KeywordSortDiv = styled(ButtonSortDiv)`
  width: max-content;
  height: 36px;
  display: flex;
  margin: 0 10px 0 0;
  justify-content: flex-between;
`;

const Keyword = styled.div`
  display: inline-block;
  height: 36px;
  color: black;
  text-align: center;
  width: max-content;
  background-color: gainsboro;
  padding: 10px;
  border-radius: 5px;
`;

const RecommendKeywords = () => {
  //TODO: 서버에서 추천 키워드 받아서 뿌려주기

  return (
    <>
      <Title>자주 찾는 검색어</Title>
      <KeywordsContainer>
        <KeywordSortDiv>
          <Keyword>브런치</Keyword>
        </KeywordSortDiv>
        <KeywordSortDiv>
          <Keyword>해산물</Keyword>
        </KeywordSortDiv>
        <KeywordSortDiv>
          <Keyword>일식</Keyword>
        </KeywordSortDiv>
        <KeywordSortDiv>
          <Keyword>중식</Keyword>
        </KeywordSortDiv>
        <KeywordSortDiv>
          <Keyword>치킨</Keyword>
        </KeywordSortDiv>
        <KeywordSortDiv>
          <Keyword>커피</Keyword>
        </KeywordSortDiv>
      </KeywordsContainer>
    </>
  );
};
export default RecommendKeywords;
