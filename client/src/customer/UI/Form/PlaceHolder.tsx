import TextInput from './TextInput';
import { useState } from 'react';
import ResetButton from './ResetButton';
import PlaceHolderToggle from './PlaceHolderToggle';

/**
 * content에 placeHolder내용 작성
 * type을 반드시 지정해주어야함
 * type =  text || password
 * 상위 엘리먼트에 position: relative를 반드시 작성해주어야함
 */
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
    <>
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
    </>
  );
};

export default PlaceHolderText;
