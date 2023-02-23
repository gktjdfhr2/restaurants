import styled from 'styled-components';

/** this element position is absolute. 
If you want to place it within the text,
you must specify 'position: relative' to the parent element that binds the text and the button.  */

const ResetButton = styled.button.attrs({
  type: 'reset',
})`
  height: 20px;
  width: 20px;
  right: 10px;
  top: 5px;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  border: none;
  padding: 2px 5px;
  text-align: center;
  cursor: pointer;
  position: absolute;

  &:before {
    content: 'X';
  }
`;

export default ResetButton;
