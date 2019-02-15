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

const Alert = ({ type, text }: AlertItemParams): React.Node => (
  <AlertBox type={ type }>
    <h6>{ text }</h6>
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
