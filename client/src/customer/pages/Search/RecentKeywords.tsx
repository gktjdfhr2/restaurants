import { FormEvent, SetStateAction } from 'react';
import styled from 'styled-components';
import Button from '@customer/UI/Form/Button';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import React from 'react';

const KeywordsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 36px;
`;

const Keyword = styled.div`
  display: inline-block;
  height: 36px;
  color: black;
  text-align: center;
  width: max-content;
  background-color: gainsboro;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
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

const RecentKeywords = (props: {
  history: Array<String>;
  setHistory: React.Dispatch<SetStateAction<String[]>>;
  searchEvent: any;
}) => {
  const localStorage = window.localStorage;

  return (
    <KeywordsContainer>
      {props.history.length === 0 ? (
        <KeywordSortDiv>
          <NoneKeyword>최근검색어 내역이 없습니다.</NoneKeyword>
        </KeywordSortDiv>
      ) : (
        props.history.slice(0, 4).map((value, index) => (
          <KeywordSortDiv key={index}>
            <Keyword
              onClick={(event: FormEvent) => {
                props.searchEvent(event, `${value}`);
              }}
            >
              {value}
            </Keyword>
            <RemoveButton
              title="X"
              onClick={() => {
                props.history.splice(index, 1);
                props.setHistory([...props.history]);
                localStorage.setItem(
                  'searchHistory',
                  JSON.stringify(props.history)
                );
              }}
            />
          </KeywordSortDiv>
        ))
      )}
    </KeywordsContainer>
  );
};

export default React.memo(RecentKeywords);
