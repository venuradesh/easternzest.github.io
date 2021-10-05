import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import WorkIcon from "@mui/icons-material/Work";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const Header = () => {
  return (
    <Container>
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">
              <HomeIcon className="home-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <InfoIcon className="about-icon" />
              About Us
            </Link>
          </li>
          <li>
            <Link to="/collections">
              <CollectionsIcon className="collection-icon" />
              Zest Collections
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <WorkIcon className="project-icon" />
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <ContactSupportIcon className="contact-icon" />
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #090b13;

  .nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      width: 50%;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 30px;

      li {
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
`;
