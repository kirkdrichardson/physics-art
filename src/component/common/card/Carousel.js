// @flow
import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";

export default class Carousel extends React.Component<{children: any}> {
  render() {
    const settings = {
        accessibility: true,
        autoplay: true,
        infinite: true,
        dots: true,
        speed: 500,
        className: 'test-slide',
        slidesToShow: 3
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
    display: block;
    max-width: 1300px;
    min-height: 0px;
    min-width: 0px;
`;