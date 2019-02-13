// @flow strict

import Color from 'common/Color';
import { media } from 'common/Breakpoints';

import * as React from 'react';
import styled, { css } from 'styled-components';

// Generic Wrapper declared in exports

type AlertItemParams = {
  title: string,
  type: string,
  text: string
};

const Alert = ({title, type, text}: AlertItemParams): React.Node => (
    <AlertBox success>
        <h6>{`title`}</h6>
        <p>{`text`}</p>
    </AlertBox>
);

export const AlertBox = styled.div`
  border-radius: 4px;
  background-color: ${Color.white};

  ${props => props.error && css`
    border: 1px solid ${Color.error};
  `}

  ${props => props.success && css`
    border: 1px solid ${Color.success};
  `}

  ${props => props.warning && css`
    border: 1px solid ${Color.warning};
  `}
`;

export default Alert;
