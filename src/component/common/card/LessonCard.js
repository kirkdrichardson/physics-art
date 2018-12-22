// @flow strict

import * as React from 'react';
import styled, {css} from 'styled-components';
import { lighten, saturate } from 'polished';
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
                backBackgroundColor="#231b1b"
                frontContainerStyle={ContainerStyle}
                backContainerStyle={{...ContainerStyle, ...BackContainerStyle}}
                frontContentStyle={{...ContentStyle, ...FrontContentStyle}}
                backContentStyle={{...ContentStyle, ...BackContentStyle}}>

                <FrontContainer>
                    <Image src={lesson.imageSrc} />
                    <Text>
                        <Title>{lesson.title}</Title>
                        <Description>{lesson.shortDescription}</Description>
                    </Text>
                    <button ref='flipper'>Flip me</button>
                </FrontContainer>
                <div>
                    <p>{lesson.longDescription}</p>
                    <button ref='flipper'>Flip me</button>
                    {/* <StyledLink as={Button}>Go to Lesson</StyledLink> */}
                </div>
                
            
            </FlipCard>
        );
    }
}

const ContainerStyle = {
    backgroundColor: `${saturate(0.1, Color.martinique)}`,
    boxShadow: `${lighten(0.5, Color.darkGray)} 6px 6px 8px`,
    maxHeight: 500,
    maxWidth: 600,
    padding: 18,
    borderRadius: 8

};

const ContentStyle = {
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
};

const BackContainerStyle = {
    overflow: 'auto'
};

const FrontContentStyle = {
    height: '100%'
};

const BackContentStyle = {

};


const FrontContainer = styled.div`

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