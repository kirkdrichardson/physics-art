// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { CardContainer } from 'common/styled/exports';

import { media } from 'common/Breakpoints';



type Props = {||};

class Home extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1 style={{fontSize: '3rem'}}>Home</h1>
                <CardContainer>
                        <Image src={'https://picsum.photos/200/300'} />

                </CardContainer>
            </div>
        );
    }
}


const ImageContainer = styled.div`

`;

const Image = styled.img`
    background: red;

    width: calc(100vw - (50px * 2) - (16px * 2));
    height: calc((100vw - (50px * 2) - (16px * 2)) / 1.77)

    ${media.tablet`
        width: calc(100vw - (50px * 2) - (16px * 2));
        height: calc((100vw - (50px * 2) - (16px * 2)) / 1.77);
    `}

    ${media.mobile`
        width: calc(100vw - (20px * 2) - (16px * 2));
        height: calc((100vw - (20px * 2) - (16px * 2)) / 1.77);
    `}
`;

export default Home;