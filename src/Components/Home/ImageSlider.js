import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";

const ImageSlider = () => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinity: true,
    speed: 1000,
    arrows: true,
    autoplaySpeed: 11000,
    fade: false,
    autoplay: true,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: "slick-embedded",
  };

  useEffect(() => {
    gsap.from(".image-slider", 2, {
      opacity: 0,
    });

    gsap.from(".image", 2, {
      scale: 1.2,
    });
  }, []);

  return (
    <Carousel {...settings} ref={slider} className="image-slider">
      <Wrap>
        <div className="image" src="/images/main-entrance.jpg"></div>
        <div className="caption-container">
          <div className="text-container">
            <span>Welcome to</span>
            <span>Eastern University Sri Lanka</span>
          </div>
          <div className="btn-container">
            <a href="https://www.esn.ac.lk/">Visit Now</a>
          </div>
          <div className="quote">Centre of Excellence for Higher Education and Research</div>
        </div>
      </Wrap>
      <Wrap>
        <div className="image" src="/images/trinco-cover.png"></div>
        <div className="caption-container">
          <div className="text-container">
            <span>Trincomalee Campus</span>
          </div>
          <div className="btn-container">
            <a href="http://www.tc.esn.ac.lk/">Visit Now</a>
          </div>
          <div className="quote">institution with academic excellence and human values</div>
        </div>
      </Wrap>
      <Wrap>
        <div className="image" src="/images/cover-2.png"></div>
        <div className="caption-container">
          <div className="text-container">
            <span>Spiritus 2020</span>
          </div>
          <div className="btn-container">
            <a href="#">View More</a>
          </div>
        </div>
      </Wrap>
      <Wrap>
        <div className="image" src="/images/cover-3.png"></div>
        <div className="caption-container">
          <div className="text-container">
            <span>Fresher's meet 2020</span>
          </div>
          <div className="btn-container">
            <a href="#">View more</a>
          </div>
        </div>
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;

const Carousel = styled(Slider)`
  max-width: 100vw;
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
      max-width: 100vw;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #1d212f;
        opacity: 0.6;
        visibility: hidden;
        animation: slideDown 1.5s, slideUp 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        animation-delay: 1s, 10s;
      }
    }

    @keyframes slideDown {
      0% {
        bottom: 500px;
        visibility: hidden;
      }

      1% {
        visibility: visible;
      }

      100% {
        bottom: 0px;
        visibility: visible;
      }
    }

    @keyframes slideUp {
      from {
        bottom: 0px;
        opacity: 0.6;
      }
      to {
        bottom: 500px;
        opacity: 0;
      }
    }

    @keyframes fadeIn {
      0% {
        top: -20px;
        visibility: hidden;
        opacity: 0;
      }

      1% {
        visibility: visible;
      }

      100% {
        top: 0px;
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes fadeOut {
      0% {
        top: 0px;
        opacity: 1;
      }

      100% {
        top: -20px;
        opacity: 0;
      }
    }

    @keyframes zoomIn {
      0% {
        visibility: hidden;
        opacity: 0;
      }

      1% {
        visibility: visible;
      }

      100% {
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes zoomOut {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    .caption-container {
      max-width: 80vw;

      .text-container {
        span {
          animation: fadeIn 1.5s ease-in-out 3s 1 forwards, fadeOut 1s ease-in-out 9s 1 forwards;
        }
      }

      .btn-container {
        a {
          animation: zoomIn 1s ease-in-out 4s 1 forwards, zoomOut 1s ease-in-out 9s 1 forwards;
        }
      }

      .quote {
        animation: zoomIn 1.5s ease-in-out 5s 1 forwards, zoomOut 1s ease-in-out 9s 1 forwards;
      }
    }
  }

  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }

  ul {
    position: absolute;
    bottom: 10px;

    li {
      button {
        &::before {
          font-size: 0.8rem;
        }
      }

      &.slick-active {
        button {
          &::before {
            color: white;
          }
        }
      }
    }
  }
`;

const Wrap = styled.div`
  position: relative;
  overflow: hidden;

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

  .caption-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;

    .text-container {
      span {
        color: #f2f2f2;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        visibility: hidden;

        &:first-of-type {
          font-size: 1.5rem;
          font-weight: 600;
        }

        &: last-of-type {
          font-size: 2.5rem;
          font-weight: 700;
        }
      }
    }

    .btn-container {
      height: max-content;
      margin-top: 30px;

      a {
        font-size: 1rem;
        text-transform: uppercase;
        text-decoration: none;
        color: #f2f2f2;
        font-weight: 600;
        padding: 15px 30px;
        background-color: #090b13;
        transition: all 0.3s ease-in-out;
        position: relative;
        visibility: hidden;

        &:hover {
          background-color: #1e2230;
        }
      }
    }

    .quote {
      margin-top: 30px;
      color: #f2f2f2;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.2px;
      visibility: hidden;
    }
  }

  @media only screen and (max-width: 1280px) {
    .caption-container {
      width: 80vw;
    }
  }

  @media only screen and (max-width: 980px) {
    .caption-container {
      .text-container {
        span {
          &:first-of-type {
            font-size: 1.2rem;
          }

          &:last-of-type {
            font-size: 2rem;
          }
        }
      }

      .btn-container {
        a {
          padding: 10px 20px;
          font-size: 1rem;
        }
      }

      .quote {
        font-size: 0.8rem;
      }
    }
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
    .caption-container {
      width: 90vw;

      .text-container {
        span {
          &:first-of-type {
            font-size: 1rem;
          }

          &:last-of-type {
            font-size: 1.5rem;
          }
        }
      }

      .btn-container {
        a {
          font-size: 0.8rem;
          padding: 10px 15px;
        }
      }

      .quote {
        font-size: 0.7rem;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .caption-container {
      width: 80vw;

      .text-container {
        text-align: center;

        span {
          &:first-of-type {
            font-size: 0.7rem;
          }

          &:last-of-type {
            font-size: 1rem;
          }
        }
      }

      .btn-container {
        margin-top: 20px;

        a {
          font-size: 0.6rem;
        }
      }

      .quote {
        font-size: 0.6rem;
        text-align: center;
        width: 80%;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .image {
      min-height: 250px;
    }
  }
`;
