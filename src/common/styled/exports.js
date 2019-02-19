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
  background: purple;

  ${props => props.secondary && css`
    max-width: 400px;
    max-height: 200px;
  `}

  ${props => props.tertiary && css`
    max-width: 200px;
    max-height: 100px;
  `}
`;

export const Header = styled.h1`
  font-size: 3rem;
`;
