// @flow
import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";


export default class Carousel extends React.Component<{children: any}> {
  render() {
    const settings = {
        accessibility: true,
        autoPlay: true,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <Container>
            <Slider {...settings}>
                {this.props.children}
            </Slider>
        </Container>
    );
  }
}

const Container = styled.div`
    max-width: 1300px;
`;