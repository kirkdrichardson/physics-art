// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import Sidebar from 'component/common/Sidebar';

import {web, tablet, mobile} from 'common/Style';
import { media } from 'common/Breakpoints';
import Color from 'common/Color';

type Props = RouterProps & {
    routes: RouteType[]
};


class Header extends React.Component<Props> {
    render() {
        return (
            <HeaderWrapper>
                <SidebarWrapper>
                    <Sidebar {...this.props} />
                </SidebarWrapper>
                <TitleWrapper>
                    <Title>Physics Art</Title>
                </TitleWrapper>
            </HeaderWrapper>
        );
    }
}


const HeaderWrapper = styled.div`
    background: ${Color.headerBg};
    border-bottom: 1px solid ${Color.border};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 99;
    height: ${web.headerHeight}px;
    
    ${media.tablet`
    height: ${tablet.headerHeight}px;
    `}
    
    
    ${media.mobile`
    height: ${mobile.headerHeight}px;
    `}
`;

const SidebarWrapper = styled.div`
    position: absolute;
    left: 1rem;
    z-index: 999;
`;

const TitleWrapper = styled.div`
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;


const Title = styled.h1`
    font-size: 2.1rem;
    color: ${Color.invertedText};
    margin: 0 1.5rem;
`;


export default Header;