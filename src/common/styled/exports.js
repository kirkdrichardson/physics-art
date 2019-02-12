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
    max-height: 400px;
    max-width: 600px;
    flex-flow: row wrap;
    border: 1px solid red;

    ${props => props.secondary && css`
        max-width: 400px;
        max-height: 200px;
    `}

    ${props => props.tertiary && css`
    max-width: 200px;
    max-height: 100px;
`}

    background: purple;
`;

export const Header = styled.h1`
    font-size: 3rem;
`;

export const AlertBox = styled.div`
  border-radius: 4px;
  background-color: white;
  width: 100%;
  height: 50px;

  ${props => props.error && css`
    border: 1px solid red;
  `}

  ${props => props.success && css`
    border: 1px solid green;
  `}

  ${props => props.warning && css`
    border: 1px solid yellow;
  `}
`;
