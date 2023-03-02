import TextInput from './TextInput';
import { useState } from 'react';
import ResetButton from './ResetButton';
import PlaceHolderToggle from './PlaceHolderToggle';
import styled from 'styled-components';

const RelativeDiv = styled.div`
  position: relative;
  width: 100%;
  height: 46px;
  margin: 0 auto 20px auto;
`;

/**
 * content에 placeHolder내용 작성
 * type을 반드시 지정해주어야함
 * type =  text || password
 * reset버튼과 함께 사용하려면 ResetSortDiv로 묶어주어야함
 */
const TestHolder = (props: {
  content?: string;
  type: string;
  value: string;
  onChange: any;
}) => {
  const [textFocus, setTextFocus] = useState(false);

  const textFocusEvent = () => {
    console.log('focus', props.value);

    setTextFocus(true);
  };

  const textBlurEvent = () => {
    console.log('blur', props.value);
    props.value.length === 0 ? setTextFocus(false) : setTextFocus(true);
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
    </RelativeDiv>
  );
};

export default TestHolder;
