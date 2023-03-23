import PageTitle from '@customer/UI/Form/PageTitle';
import React from 'react';
import styled from 'styled-components';

const PageTitleDiv = styled(PageTitle)`
  margin: 0 0 20px 0;
  font-size: 15px;
  text-align: left;
  font-weight: normal;
  color: gray;
`;
export default React.memo(PageTitleDiv);
