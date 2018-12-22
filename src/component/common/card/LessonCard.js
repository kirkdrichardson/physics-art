// @flow strict

import * as React from 'react';
import styled, {css} from 'styled-components';
import { lighten } from 'polished';
// import { Link } from 'react-router-dom';

import FlipCard from 'component/common/card/FlipCard';

import { media } from 'common/Breakpoints';
// import {web, tablet, mobile} from 'common/Style';
import Color from 'common/Color';

type Props = {
    lesson: LessonSummaryType
};


class LessonCard extends React.Component<Props> {
    render() {
        const { lesson } = this.props;
        return (
            <FlipCard
                frontBackgroundColor="#B96aC9"
                backBackgroundColor="#231b1b">
                <Container>
                    <Image src={lesson.imageSrc} />
                    <Text>
                        <Title>{lesson.title}</Title>
                        <Description>{lesson.shortDescription}</Description>
                    </Text>
                    <button ref='flipper'>Flip me</button>
                </Container>
                <div>
                    <p>{lesson.longDescription}</p>
                    <button ref='flipper'>Flip me</button>
                    {/* <StyledLink as={Button}>Go to Lesson</StyledLink> */}
                </div>
                
            
            </FlipCard>
        );
    }
}

const Container = styled.div`
border: 2px solid red;
    background-color: ${lighten(0.3, Color.martinique)};
    color: white;
    font-weight: bold;
    line-height: 

    border-radius: 6px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-shadow: ${Color.mediumGray} 5px 5px;

    max-width: 620px;
    padding: 18px;

    ${media.tablet`
        max-width: 420px;
    `}

    ${media.mobile`
        max-width: 320px;
    `}
`;

const Image = styled.img`
    background: ${Color.darkGrey};
`;

const Text = styled.div`

`;

const Title = styled.h3`

`;

const Description = styled.p`

`;

export default LessonCard;