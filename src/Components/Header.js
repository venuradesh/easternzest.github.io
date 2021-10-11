import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import WorkIcon from "@mui/icons-material/Work";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import gsap from "gsap";

const Header = () => {
  const ham = useRef();
  const nav = useRef();
  const ul = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".overlay", 2, {
      opacity: 0,
    }).to(".overlay", 0, {
      css: { display: "none" },
    });
  }, []);

  const onHamClick = () => {
    ham.current.classList.toggle("active");
    nav.current.classList.toggle("active");
    const listItems = document.querySelectorAll(".list-item");
    if (nav.current.classList.contains("active")) {
      gsap.fromTo(ul.current, { height: 0, visibility: "hidden" }, { visibility: "visible", height: "225px", duration: 0.3, delay: 0 });
      listItems.forEach((item) => {
        gsap.fromTo(item, { visibility: "hidden" }, { visibility: "visible", duration: 0.3, delay: 0.2 });
      });
    }
  };

  return (
    <Container>
      <div className="nav-container" ref={nav}>
        <ul ref={ul}>
          <li className="list-item">
            <div className="overlay"></div>
            <Link to="/">
              <HomeIcon className="home-icon icon" />
              Home
            </Link>
          </li>
          <li className="list-item">
            <div className="overlay"></div>
            <Link to="/about">
              <InfoIcon className="about-icon icon" />
              About Us
            </Link>
          </li>
          <li className="list-item">
            <div className="overlay"></div>
            <Link to="/collections">
              <CollectionsIcon className="collection-icon icon" />
              Zest Collections
            </Link>
          </li>
          <li className="list-item">
            <div className="overlay"></div>
            <Link to="/projects">
              <WorkIcon className="project-icon icon" />
              Projects
            </Link>
          </li>
          <li className="list-item">
            <div className="overlay"></div>
            <Link to="/contact">
              <ContactSupportIcon className="contact-icon icon" />
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <HamburgerMenu ref={ham} onClick={() => onHamClick()}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 100;

  .nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    ul {
      width: 50%;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 30px;
      position: relative;
      max-height: 70px;

      li {
        position: relative;

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: #090b13;
          z-index: 1;
        }

        a {
          text-decoration: none;
          color: #f2f2f2;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          position: relative;

          .home-icon,
          .about-icon,
          .project-icon,
          .collection-icon,
          .contact-icon {
            font-size: 0.9rem;
            margin-right: 5px;
          }

          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            right: 0;
            left: 0;
            bottom: -5px;
            background-color: #f2f2f2;
            transform: scale(0);
            transition: all 0.3s ease;
          }

          &:hover {
            &::after {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .nav-container {
      ul {
        width: 80%;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .nav-container {
      ul {
        width: 90%;

        li {
          .icon {
            font-size: 0.6rem;
          }

          a {
            font-size: 0.7rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 680px) {
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    padding: 0;
    z-index: 100;

    .nav-container {
      display: none;

      &.active {
        width: 100%;
        display: flex;

        ul {
          width: 300px;
          flex-direction: column;
          position: absolute;
          top: 70px;
          right: 0;
          max-height: 225px;
          background-color: #090b13;
          visibility: hidden;

          li {
            width: 100%;
            transition: all 0.3s ease;
            align-items: flex-start;

            a {
              width: 100%;
              padding: 15px 20px;
            }

            a::after {
              display: none;
            }

            &:hover {
              background-color: #11131c;
            }
          }
        }
      }
    }
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  position: absolute;
  cursor: pointer;
  right: 20px;

  span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: #f2f2f2;
    margin-bottom: 3px;
    transition: all 0.3s ease;
  }

  &.active {
    span {
      position: relative;
    }

    span:nth-of-type(1) {
      transform: rotateZ(45deg);
      top: 0;
    }

    span:nth-of-type(3) {
      top: -3.8px;
      left: 0px;
      transform: rotateZ(-45deg);
    }

    span:nth-of-type(2) {
      display: none;
    }
  }

  @media only screen and (max-width: 680px) {
    display: block;
  }
`;
