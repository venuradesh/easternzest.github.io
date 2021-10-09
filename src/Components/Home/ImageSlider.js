import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";

const ImageSlider = () => {
  const entranceTint = useRef(null);
  const slider = useRef(null);

  const beforeChange = (prev, next) => {
    const trackChilds = document.querySelector(".slick-track").childNodes;
    trackChilds.forEach((child) => {
      if (!child.classList.contains("slick-cloned")) {
        if (child.classList.contains("slick-active")) {
        }
      }
    });
  };

  const afterChange = (index) => {
    if (index === 0) {
    }
  };

  const settings = {
    dots: false,
    infinity: true,
    speed: 200,
    autoplaySpeed: 10000,
    fade: false,
    autoplay: false,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange,
    afterChange,
    className: "slick-embedded",
  };

  return (
    <Carousel {...settings} ref={slider}>
      <Wrap>
        <div className="image" src="/images/main-entrance.jpg"></div>
        {/* <img src="/images/main-entrance.jpg" alt="Main Entrance" /> */}
        <span>Welcome to</span>
        <span>Eastern University Sri Lanka</span>
      </Wrap>
      <Wrap>
        <div className="image" src="/images/trinco-cover.png"></div>
        <span>Welcome to</span>

        {/* <img src="/images/trinco-cover.png" alt="Main Entrance" /> */}
      </Wrap>
      <Wrap>
        <div className="image" src="/images/cover-2.png"></div>
        <span>Welcome to</span>

        {/* <img src="/images/cover-2.png" alt="Main Entrance" /> */}
      </Wrap>
      <Wrap>
        <div className="image" src="/images/cover-3.png"></div>
        <span>Welcome to</span>

        {/* <img src="/images/cover-3.png" alt="Main Entrance" /> */}
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;

const Carousel = styled(Slider)`
  width: 100vw;
  height: max-content;
  overflow: hidden;
  background-color: #1d212f;
  position: relative;

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-active {
    .image {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #1d212f;
        opacity: 0;
        animation-name: slideDown;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        animation-delay: 3s;
      }
    }

    @keyframes slideDown {
      from {
        bottom: 500px;
        opacity: 0;
      }
      to {
        bottom: 0px;
        opacity: 0.6;
      }
    }
  }
`;

const Wrap = styled.div`
  // position: relative;

  img {
    width: 100vw;
    // min-height: 300px;
    max-height: 500px;
    object-fit: cover;
    background-size: contain;
    border: 4px solid #1d212f;
    opacity: 1;
  }

  .tint {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background-color: #1d212f;
    opacity: 0.3;
    visibility: hidden;
  }

  .image {
    width: 100vw;
    min-height: 500px;
    background-image: url(${(obj) => obj.children[0].props.src});
    background-size: cover;
    object-fit: cover;
    background-position: center;
    position: relative;
  }

  span {
    position: absolute;
  }

  @media only screen and (max-width: 800px) {
    .image {
      min-height: 400px;
    }
  }

  @media only screen and (max-width: 650px) {
    .image {
      min-height: 300px;
    }
  }

  @media only screen and (max-width: 400px) {
    .image {
      min-height: 250px;
    }
  }
`;
