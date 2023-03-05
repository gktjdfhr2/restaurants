import styled from 'styled-components';

const SignInNavigation = styled.div`
  width: 100%;
  height: 150px;
  font-weight: bold;
  opacity: 0.5;
  color: black;

  &:before {
    content: ${(props) => `'${props.title + '  >' || ''}'`};
    display: flex;
    align-items: center;
    width: max-content;
    height: 100%;
    font-size: 30px;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
export default SignInNavigation;
