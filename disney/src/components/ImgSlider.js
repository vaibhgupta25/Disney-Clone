import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'

export default function ImgSlider() {
  let settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="">
        <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
        <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
        <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
margin-top:20px;
  & > button {
    opacity:0;
    width:5vw;
    z-index:1;
  }

  &:hover{
    &>button {
      transition : opacity 0.5s ease ;
      opacity:1;
    }
  }

  ul li button {
    &:before {
      font-size:10px;
      color:rgb(150,150,171);
    }
  }

  li.slick-active button:before {
    color:white;
  }

  .slick-list {
    overflow : initial;
  }

  .slick-prev {
    left : calc(10px - 3vw);
  }
  .slick-next {
    right : calc(8px - 3vw);
  }
  
`

const Wrap = styled.div`
position:relative;

  a { 
    position:relative;
  }
    border-radius:4px;
    box-shadow : rgb( 0 0 0 / 69%) 0px 26px 30px -10px ,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    padding:4px;

    img {
      width:100%;
      height:100%;
      border-radius:4px;
    }
    &:hover{
      padding:0px;
      border:3px solid white;
      transition:0.3s ease ;
    }
`;