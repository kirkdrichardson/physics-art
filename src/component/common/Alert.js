// @flow strict

import Color from 'common/Color';
import { media } from 'common/Breakpoints';

import * as React from 'react';
import styled, { css } from 'styled-components';

type AlertEnumType = 'success' | 'warning' | 'error';

type AlertItemParams = {
  type: AlertEnumType,
  text: string
};

const Alert = ({ type, title, children }: AlertItemParams): React.Node => (
  <AlertBox type={ type }>
    <AlertBoxTitle>{ title }</AlertBoxTitle> 
    <div>{ children }</div>
  </AlertBox>
);

export const AlertBox = styled.div`
  text-align: left;
  border-radius: 4px;
  padding: 12px;
  
  ${({ type }) => css`
    background-color: ${Color[`${type}Background`]};
    border-left: 3px solid ${Color[`${type}Border`]};
  `}
`;

export const AlertBoxTitle = styled.div`
  padding-left: 1.2rem;
  font-size: 0.8rem;
  color: #000000e0;
  margin-top: 0.3rem;
`;

export default Alert;
