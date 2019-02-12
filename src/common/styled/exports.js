import styled, { css } from 'styled-components';
import Color from 'common/Color';

export const Button = styled.button`
    border-radius: 4px;
    color: white;
    background-color: ${Color.primary}

    ${props => props.secondary && css`
        background-color: ${Color.secondary};
        color: ${Color.primary};
    `}
`;

export const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

export const AlertContainer = styled.div`
  border-radius: 4px;
  background-color: red;
  width: 20px;
  height: 20px;
`;
