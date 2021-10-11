import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";

const ParallaxSection = () => {
  return (
    <ParallaxEle bgImage="/images/main-entrance-parallax.jpg" strength={200} blur={5}>
      <ParallaxContainer>
        <div className="parallax-overlay"></div>
        <div className="learn-more-btn">Learn more</div>
      </ParallaxContainer>
    </ParallaxEle>
  );
};

export default ParallaxSection;

const ParallaxEle = styled(Parallax)`
  margin-bottom: 100vw;
  height: 350px;
  width: 100vw;

  @media only screen and (max-width: 800px) {
    height: 450px;
  }
`;

const ParallaxContainer = styled.div`
  height: 350px;
  width: 100vw;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .parallax-overlay {
    display: inline-block;
    background-color: var(--bg-light-clr);
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .learn-more-btn {
    width: 150px;
    height: 50px;
    background-color: var(--bg-white-clr);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--bg-light-clr);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 800px) {
    height: 450px;
  }
`;
