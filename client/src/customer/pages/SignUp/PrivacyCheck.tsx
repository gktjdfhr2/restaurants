import { ChangeEventHandler, MouseEventHandler } from 'react';
import PlaceHolderText from '@customer/UI/Form/PlaceHolder';
import { SignUp } from '@customer/components/SignUp';
import styled from 'styled-components';

const MemberType = styled.select`
  width: 100%;
  height: 46px;
  padding: 0 5px;
`;

const PrivacyCheck = (props: {
  nameValue: string;
  memberNameHandle: ChangeEventHandler;
  nameCheckValidation: JSX.Element;
  phoneValue: string;
  memberPhoneHandle: ChangeEventHandler;
  phoneCheckValidation: JSX.Element;
  addressValue: string;
  memberAddressHandle: ChangeEventHandler;
  addressCheckValidation: JSX.Element;
  memberRoleHandle: ChangeEventHandler;
  onClick: MouseEventHandler;
}) => {
  return (
    <>
      <SignUp.ElementContainer>
        <SignUp.PageTitleDiv>
          맛집 지도는 개인 정보를 비공개로 안전하게 유지합니다.
          <br />
        </SignUp.PageTitleDiv>
        <SignUp.InputContainer>
          <PlaceHolderText
            content="이름"
            type="text"
            value={props.nameValue}
            onChange={props.memberNameHandle}
          />
          {props.nameCheckValidation}
        </SignUp.InputContainer>
        <SignUp.InputContainer>
          <PlaceHolderText
            content="핸드폰 번호"
            type="text"
            value={props.phoneValue}
            onChange={props.memberPhoneHandle}
          />
          {props.phoneCheckValidation}
        </SignUp.InputContainer>
        <SignUp.InputContainer>
          <PlaceHolderText
            content="주소"
            type="text"
            value={props.addressValue}
            onChange={props.memberAddressHandle}
          />
          {props.addressCheckValidation}
        </SignUp.InputContainer>
        <MemberType defaultValue="0" onChange={props.memberRoleHandle}>
          <option value="0">고객</option>
          <option value="1">사업자</option>
        </MemberType>

        <SignUp.NextButton
          type="button"
          title="가입하기"
          onClick={props.onClick}
        />
      </SignUp.ElementContainer>
    </>
  );
};

export default PrivacyCheck;
