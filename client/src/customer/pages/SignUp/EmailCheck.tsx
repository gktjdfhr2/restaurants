import Button from '@customer/UI/Form/Button';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import ResetButton from '@customer/UI/Form/ResetButton';
import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import PageTitle from '@customer/UI/Form/PageTitle';
const Container = styled(ButtonSortDiv)`
  width: 70%;
  margin: 0 auto;
`;
const NextButton = styled(Button)`
  margin-top: 30px;
`;

const ValidationCheckDiv = styled.div`
  color: red;
`;

const PageTitleDiv = styled(PageTitle)`
  margin: 0 0 20px 0;
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  color: gray;
`;
const EmailCheck = (props: {
  value: string;
  onChange: ChangeEventHandler;
  onReset: MouseEventHandler;
  onClick: MouseEventHandler;
  validation: boolean;
}) => {
  return (
    <>
      <Container>
        <PageTitleDiv>
          하나의 계정으로
          <br />
          모든 맛집지도 서비스를 이용하실 수 있습니다.
        </PageTitleDiv>

        <ButtonSortDiv>
          <PlaceHolderText
            content="이메일 주소"
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
          {props.value.length > 0 && <ResetButton onClick={props.onReset} />}
        </ButtonSortDiv>

        {props.validation ||
          (props.value.length > 0 && (
            <ValidationCheckDiv>
              이메일 양식을 맞춰주세요 ex)example@example.com
            </ValidationCheckDiv>
          ))}

        <NextButton title="다음" onClick={props.onClick} />
      </Container>
    </>
  );
};

export default EmailCheck;
