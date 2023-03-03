import styled from 'styled-components';
import Button from '@customer/UI/Form/Button';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';

const KeywordsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 36px;
`;

const Keyword = styled.div`
  // position: relative;
  display: inline-block;
  height: 36px;
  color: black;
  text-align: center;
  width: max-content;
  // transform: translateY(-50%);
  // top: 50%;
  background-color: gainsboro;
  padding: 10px;
  border-radius: 5px 0 0 5px;
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
  // display: flex;
  margin: 0 10px;
  // justify-content: flex-between;
`;

const RecentKeywords = () => {
  return (
    <KeywordsContainer>
      <KeywordSortDiv>
        <Keyword>keyword</Keyword>
        <RemoveButton title="X" />
      </KeywordSortDiv>
      <KeywordSortDiv>
        <Keyword>keywordkeywordkeyword</Keyword>
        <RemoveButton title="X" />
      </KeywordSortDiv>
      <KeywordSortDiv>
        <Keyword>keywordkeyword</Keyword>
        <RemoveButton title="X" />
      </KeywordSortDiv>{' '}
      <KeywordSortDiv>
        <Keyword>keywordkeyword</Keyword>
        <RemoveButton title="X" />
      </KeywordSortDiv>
    </KeywordsContainer>
  );
};

export default RecentKeywords;
