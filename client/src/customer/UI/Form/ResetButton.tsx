import styled from 'styled-components';

/** this element position is absolute. 
If you want to place it within the text,
you must specify 'position: relative' to the parent element that binds the text and the button.  */

const ResetButton = styled.button.attrs({
  type: 'reset',
})`
  height: 25px;
  width: 25px;
  right: 5px;
  top: 2px;
  border-radius: 50%;
  background-color: white;
  color: gray;
  border: none;
  padding: 2px 5px;
  text-align: center;
  position: absolute;
  cursor: pointer;

  &:before {
    content: 'X';
  }
  &:hover {
    background-color: #ccc;
    transition: background-color 0.5s;
  }
`;

export default ResetButton;
