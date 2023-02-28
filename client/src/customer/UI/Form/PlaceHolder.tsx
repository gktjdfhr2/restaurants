import TextInput from './TextInput';
import { useState } from 'react';
import ResetButton from './ResetButton';
import PlaceHolderToggle from './PlaceHolderToggle';
import styled from 'styled-components';

/**
 * content에 placeHolder내용 작성
 * type을 반드시 지정해주어야함
 * type =  text || password
 */
const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  margin: 0 auto 20px auto;
`;

const PlaceHolderText = (props: {
  content?: string;
  type: string;
  reset?: boolean;
}) => {
  const [textFocus, setTextFocus] = useState(false);
  const [inputText, setInputText] = useState('');

  const textFocusEvent = () => {
    console.log('focus');
    setTextFocus(true);
  };

  const textBlurEvent = () => {
    console.log('blur');
    if (inputText.length <= 0) {
      setTextFocus(false);
    }
  };

  return (
    <RelativeDiv>
      <TextInput
        type={props.type}
        onFocus={textFocusEvent}
        onBlur={textBlurEvent}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <PlaceHolderToggle toggle={textFocus}>{props.content}</PlaceHolderToggle>
      {props.reset === true && inputText.length > 0 && (
        <ResetButton onClick={() => setInputText('')} />
      )}
    </RelativeDiv>
  );
};

export default PlaceHolderText;
