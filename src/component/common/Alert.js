// @flow strict

import Color from 'common/Color';
import { media } from 'common/Breakpoints';

import * as React from 'react';
import styled, { css } from 'styled-components';

type AlertEnumType = 'success' | 'warning' | 'error';

type AlertItemParams = {
  type: AlertEnumType,
  text: string,
  title: string
};

const Alert = ({ type, text, title }: AlertItemParams): React.Node => (
  <AlertBox type={ type }>
    <h6 >{ title }</h6>
    <p>{ text }</p>
  </AlertBox>
);

export const AlertBox = styled.div`
  text-align: center;
  border-radius: 4px;
  background-color: ${Color.white};

  ${({ type }) => css`
    border: 1px solid ${Color[type]};
  `}
`;

export default Alert;
