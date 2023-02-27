import styled from 'styled-components';

const PlaceHolderToggle = styled.div<{ toggle: boolean }>`
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
export default PlaceHolderToggle;
