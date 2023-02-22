import styled from 'styled-components';

const HeaderLogo = styled.div`
  background: url(/images/placeholder.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  height: 100%;
  width: 100px;
  text-align: center;
  position: relative;

  &:after {
    content: ${(props) => `'${props.title || ''}'`};
    position: absolute;
    top: 50%;
    right: -30px;
    width: max-content;
    font-weight: bold;
    color: white;

    transform: translate(0, -50%);
  }
`;
export default HeaderLogo;
