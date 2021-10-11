import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const LogoBanner = () => {
  useEffect(() => {
    gsap.from(".logo-banner div", 4, {
      opacity: 0,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  return (
    <Container className="logo-banner">
      <div className="eastern-zest-logo"></div>
      <div className="eastern-uni-logo-container">
        <div className="eastern-uni-logo"></div>
        <div className="span-container">
          <span>Eastern University</span>
          <span>Sri Lanka</span>
        </div>
      </div>
      <div className="eastern-waves-logo"></div>
    </Container>
  );
};

export default LogoBanner;

const Container = styled.div`
  height: 150px;
  width: 100vw;
  background-image: url("/images/home-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 50px;

  .eastern-zest-logo {
    width: 200px;
    height: 100px;
    background-image: url("/images/eastern-zest-logo.png");
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .eastern-uni-logo-container {
    display: flex;
    align-items: center;

    .span-container {
      display: flex;
      flex-direction: column;
      cursor: default;

      span {
        margin-left: 20px;
        color: var(--bg-white-clr);
        text-transform: uppercase;
        text-shadow: 3px 5px 7px rgba(0, 0, 0, 1);

        &:first-of-type {
          font-size: 2rem;
          font-weight: 620;
        }

        &:last-of-type {
          font-size: 1.3rem;
          letter-spacing: 10px;
          font-weight: 600;
        }
      }
    }

    .eastern-uni-logo {
      width: 100px;
      height: 100px;
      background-image: url("/images/eastern-uni-logo.png");
      object-fit: cover;
      background-size: cover;
    }
  }

  .eastern-waves-logo {
    width: 200px;
    height: 100px;
    background-image: url("/images/eastern-waves-logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }

  @media only screen and (max-width: 980px) {
    .eastern-zest-logo {
      width: 150px;
    }

    .eastern-uni-logo-container {
      .eastern-uni-logo {
        width: 80px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      .span-container {
        span {
          &:first-of-type {
            font-size: 1.5rem;
          }
          &:last-of-type {
            font-size: 0.8rem;
          }
        }
      }
    }

    .eastern-waves-logo {
      width: 150px;
    }
  }

  @media only screen and (max-width: 780px) {
    .eastern-uni-logo-container {
      flex-direction: column;
      alingn-items: center;

      .eastern-uni-logo {
        width: 50px;
        position: relative;
      }

      .span-container {
        align-items: center;

        span {
          &:first-of-type {
            font-size: 1rem;
            position: relative;
            top: -20px;
            margin-left: 0px;
          }

          &:last-of-type {
            font-size: 0.6rem;
            letter-spacing: 4px;
            position: relative;
            top: -20px;
            margin-left: 0px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 620px) {
    .eastern-zest-logo {
      width: 80px;
    }

    .eastern-uni-logo-container {
      .span-container {
        width: 140px;
        span {
          &:first-of-type {
            font-size: 0.8rem;
          }

          &:last-of-type {
            font-size: 0.6rem;
          }
        }
      }
    }
    .eastern-waves-logo {
      width: 80px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0px;

    .eastern-waves-logo {
      display: none;
    }
  }
`;
