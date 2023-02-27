import styled from 'styled-components';
import TextInput from './TextInput';
import { useState } from 'react';

const PlaceHolder = styled.div<{ toggle: boolean }>`
  position: absolute;
  background-color: white;
  color: black;

  ${(props) =>
    !props.toggle &&
    `
    top: 50%;
    left: 5%;
    opacity: 0.5;
    transform: translateY(-50%);
    transition: all 0.1s ease-in-out;
  `}

  ${(props) =>
    props.toggle &&
    `
    top: 0;
    left: 1%;
    opacity: 1;
    transform: scale(0.75) translateY(-50%);
    transition: all 0.1s ease-in-out;
  `}
`;

/**
 * content에 placeHolder내용 작성
 * type을 지정해주어야함
 * type =  text || password
 */
const PlaceHolderText = (props: { content: string; type: string }) => {
  const [textFocus, setTextFocus] = useState(false);
  const textFocusEvent = () => {
    console.log('focus');
    setTextFocus(true);
  };
  const textBlurEvent = () => {
    console.log('blur');
    setTextFocus(false);
  };
  console.log('proptype', props.type);
  return (
    <>
      <TextInput
        type={props.type}
        onFocus={textFocusEvent}
        onBlur={textBlurEvent}
      />
      <PlaceHolder toggle={textFocus}>{props.content}</PlaceHolder>
    </>
  );
};

export default PlaceHolderText;
