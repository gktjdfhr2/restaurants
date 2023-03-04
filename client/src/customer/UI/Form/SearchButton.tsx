import styled from 'styled-components';

/** this element position is absolute. 
If you want to place it within the text,
you must specify 'position: relative' to the parent element that binds the text and the button.
ex)
<ButtonSortDiv> 
  <SearchButton/>
</ButtonSortDiv> */
const SearchButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  height: 25px;
  width: 25px;
  background: url(/src/assets/images/mobile-magnifying-glass.png) no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 20px;
  right: 1%;
  top: 50%;
  border: none;
  text-align: center;
  position: absolute;
  cursor: pointer;
  transform: translateY(-50%);

  // &:hover {
  //   background-color: #ccc;
  //   transition: background-color 0.5s;
  // }
`;

export default SearchButton;
