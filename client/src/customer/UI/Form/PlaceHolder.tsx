import TextInput from './TextInput';
import { ChangeEvent, useState } from 'react';
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
  value: string;
  onChange: any;
  onReset?: any;
}) => {
  const [textFocus, setTextFocus] = useState(false);

  const textFocusEvent = () => {
    console.log('focus', props.value);

    setTextFocus(true);
  };

  const textBlurEvent = () => {
    console.log('blur', props.value);
    props.value.length <= 0 ? setTextFocus(false) : setTextFocus(true);
  };

  return (
    <RelativeDiv>
      <TextInput
        type={props.type}
        onFocus={textFocusEvent}
        onBlur={textBlurEvent}
        onChange={props.onChange}
        value={props.value}
      />
      <PlaceHolderToggle toggle={textFocus}>{props.content}</PlaceHolderToggle>
      {props.reset === true && props.value.length > 0 && (
        <ResetButton onClick={props.onReset} />
      )}
    </RelativeDiv>
  );
};

export default PlaceHolderText;
