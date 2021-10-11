import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Society from "./Home/AboutSociety";
import ImageSlider from "./Home/ImageSlider";
import LogoBanner from "./Home/LogoBanner";
import ParallaxSection from "./Home/Parallax";

const Home = () => {
  return (
    <Container>
      <Header />
      <LogoBanner />
      <ImageSlider />
      <Society />
      <ParallaxSection />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    // background-image: url("/images/home-background.png");
    background-size: cover;
    background-repeat: none;
    background-position: top;
  }
`;
