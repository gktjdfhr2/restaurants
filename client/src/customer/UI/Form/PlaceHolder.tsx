import TextInput from './TextInput';
import styled, { css } from 'styled-components';

//TODO: changeEvent 타입 지정

const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  margin: 0 auto 20px auto;
`;

const TestToggle = styled.div<{ value: string }>`
  position: absolute;
  pointer-events: none;
  background-color: white;
  width: auto;
  padding: 5px;
  color: black;

  top: 50%;
  left: 0;
  opacity: 0.5;
  transform: translateY(-50%);
  transition: all 0.1s ease-in-out;
  color: black;

  ${TextInput}:focus ~ & {
    color: var(--signature);
    top: 0;
    left: 0;
    opacity: 1;
    transform: scale(0.75) translateY(-50%);
    transition: all 0.1s ease-in-out;
  }

  ${(props) =>
    props.value === ''
      ? css`
          top: 50%;
          left: 0;
          opacity: 0.5;
          transform: translateY(-50%);
          transition: all 0.1s ease-in-out;
          color: black;
        `
      : css`
          color: var(--signature);
          top: 0;
          left: 0;
          opacity: 1;
          transform: scale(0.75) translateY(-50%);
          transition: all 0.1s ease-in-out;
        `}
`;

/**
 * content에 placeHolder내용 작성
 * type을 반드시 지정해주어야함
 * type =  text || password
 */
const PlaceHolderText = (props: {
  content: string;
  type: string;
  value: string;
  onChange: any;
}) => {
  return (
    <RelativeDiv>
      <TextInput
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
      <TestToggle value={props.value}>{props.content}</TestToggle>
    </RelativeDiv>
  );
};

export default PlaceHolderText;
