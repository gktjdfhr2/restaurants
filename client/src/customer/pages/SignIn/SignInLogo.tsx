import React from 'react';
import styled from 'styled-components';

const HeaderLogo = styled.div`
  background: url(/src/assets/images/placeholder.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  height: 128px;
  width: 350px;
  text-align: center;
  position: relative;
  margin: 48px auto;

  &:after {
    content: ${(props) => `'${props.title || ''}'`};
    position: absolute;
    top: 50%;
    right: 0;
    width: max-content;
    font-weight: bold;
    font-size: 64px;
    color: var(--signature);
    height: max-content;
    width: max-content;

    transform: translate(0, -50%);
  }
`;
export default React.memo(HeaderLogo);
