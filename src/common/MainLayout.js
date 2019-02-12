// @flow
import styled from 'styled-components';

import Color from 'common/Color';
import {web, tablet, mobile} from 'common/Style';
import { media } from 'common/Breakpoints';

export const DeviceEnums: {[DeviceEnumType]: DeviceEnumType} = {
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
  MOBILE: 'MOBILE'
};

export const AlertClasses: {[DeviceEnumType]: DeviceEnumType} = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING'
};

// TODO - rewrite as styled components theme https://www.styled-components.com/docs/advanced


export const AppContainer = styled.div`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${Color.primaryBg};
  overflow: auto;
`;

export const MainContent = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;  
  margin: ${web.headerHeight + web.bodyPadding}px ${web.bodyPadding}px;
  box-sizing: border-box;
  color: ${Color.primaryText};
  font-size: 1.5rem;
  z-index: 2;

  ${media.tablet`
  margin: ${tablet.headerHeight + tablet.bodyPadding}px ${tablet.bodyPadding}px;
  `}

  ${media.mobile`
  margin: ${mobile.headerHeight + mobile.bodyPadding}px ${mobile.bodyPadding}px;
  `}
`;

export const Page = styled.div`
  width: 100%;
  max-width: 1200px;
`;
