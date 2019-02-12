// @flow strict

import * as React from 'react';
import styled, {css} from 'styled-components';
import { lighten, saturate } from 'polished';
// import { Link } from 'react-router-dom';

import FlipCard from 'component/common/card/FlipCard';
import { Button } from 'common/styled/exports';

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
                frontContainerStyle={ContainerStyle}
                backContainerStyle={{...ContainerStyle, ...BackContainerStyle}}
                frontContentStyle={{...ContentStyle, ...FrontContentStyle}}
                backContentStyle={{...ContentStyle, ...BackContentStyle}}>

                <FrontContainer>
                    <ImageContainer>
                        <Image src={lesson.imageSrc} />
                    </ImageContainer>
                    <Text>
                        <Title>{lesson.title}</Title>
                        <Description>{lesson.shortDescription}</Description>
                    </Text>
                    <Button ref='flipper'>Flip me</Button>
                </FrontContainer>
                <div>
                    <p>{lesson.longDescription}</p>
                    <Button ref='flipper'>Flip me</Button>
                    {/* <StyledLink as={Button}>Go to Lesson</StyledLink> */}
                </div>
                
            
            </FlipCard>
        );
    }
}

const ContainerStyle = {
    backgroundColor: `${Color.secondary}`,
    boxShadow: `${lighten(0.5, Color.darkGray)} 6px 6px 8px`,
    padding: 18,
    borderRadius: 8,
    marginRight: 20,
    width: 300,
    height: 400
};

const ContentStyle = {
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
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

const imageHeight = 200;

const ImageContainer = styled.image`
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    height: ${imageHeight}px;
`;

const Image = styled.img`
    background: ${Color.darkGrey};
    width: 100%;
    height: 100%;
    border-radius: 6px;
`;

const Text = styled.div`
    margin-top: ${imageHeight + 20}px;
`;

const Title = styled.h3`

`;

const Description = styled.p`

`;

export default LessonCard;