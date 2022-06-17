import React, { useState } from 'react'
import styled from 'styled-components';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {

    const [slides] = useState([
        {
            image: "/images/slider-badging.jpg",
            name: "sliderBadging"
        },
        {
            image: "/images/slider-badag.jpg",
            name: "sliderBadag"
        },
        {
            image: "/images/slider-scale.jpg",
            name: "sliderScale"
        },
        {
            image: "/images/slider-scales.jpg",
            name: "sliderScales"
        },
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            {slides.map((slide, index) => {
                return (
                    <Wrap key={index}>
                        <img src={slide.image} alt={slide.name} />
                    </Wrap>
                )
            })}
        </Carousel>
    )
}

export default Slides

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button:before {
        font-size: 10px;
        color: #FFFFFF
    }

    li.slick-active {
        button:before {
            color: #FFFFFF;
        }
    }

    .slick-list{
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        border: 4px solid transparent;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`