import { ChangeEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import Button from '@customer/UI/Form/Button';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import ResetButton from '@customer/UI/Form/ResetButton';
import PageTitle from '@customer/UI/Form/PageTitle';

const ElementContainer = styled(ButtonSortDiv)`
  width: 70%;
  margin: 0 auto;
`;

const EmailInputContainer = styled(ButtonSortDiv)`
  width: 100%;
  margin: 0 auto;
  height: 100px;
`;
const PasswordInputContainer = styled(ButtonSortDiv)`
  width: 100%;
  margin: 0 auto;
  height: 150px;
`;
const ButtonContainer = styled(ButtonSortDiv)`
  margin: 0 auto 10px auto;
`;

const NextButton = styled(Button)`
  margin-top: 30px;
`;

const ValidationCheckDiv = styled.div`
  color: red;
  opacity: 0.7;
`;
// const PasswordDiv = styled.div`
//   opacity: 0.7;
// `;
const PageTitleDiv = styled(PageTitle)`
  margin: 0 0 20px 0;
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  color: gray;
`;

const AccountCheck = (props: {
  emailValue: string;
  memberEmailHandle: ChangeEventHandler;
  memberEmailReset: MouseEventHandler;
  emailValidation: boolean;
  passwordValue: string;
  memberPasswordHandle: ChangeEventHandler;
  passwordValidation: boolean;
  passwordCheckValue: string;
  memberPasswordCheckHandle: ChangeEventHandler;
  passwordCheckValidation: JSX.Element;
  onClick: MouseEventHandler;
}) => {
  return (
    <>
      <ElementContainer>
        <PageTitleDiv>
          하나의 계정으로
          <br />
          모든 맛집지도 서비스를 이용하실 수 있습니다.
        </PageTitleDiv>
        <EmailInputContainer>
          <ButtonContainer>
            <PlaceHolderText
              content="이메일 주소"
              type="text"
              value={props.emailValue}
              onChange={props.memberEmailHandle}
            />
            {props.emailValue.length > 0 && (
              <ResetButton onClick={props.memberEmailReset} />
            )}
          </ButtonContainer>

          {props.emailValidation ||
            (props.emailValue.length > 0 && (
              <ValidationCheckDiv>
                이메일 양식을 맞춰주세요 ex)example@example.com
              </ValidationCheckDiv>
            ))}
        </EmailInputContainer>

        <PasswordInputContainer>
          <PlaceHolderText
            content="비밀번호"
            type="password"
            value={props.passwordValue}
            onChange={props.memberPasswordHandle}
          />
          <PlaceHolderText
            content="비밀번호 확인"
            type="password"
            value={props.passwordCheckValue}
            onChange={props.memberPasswordCheckHandle}
          />
          {props.passwordCheckValidation}
        </PasswordInputContainer>

        <NextButton type="button" title="다음" onClick={props.onClick} />
      </ElementContainer>
    </>
  );
};

export default AccountCheck;
