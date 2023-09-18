import React from "react";
import { useState } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { CgMenuGridO } from "react-icons/cg";
import Logo from "../images/logo-white.png";
import {
  MdOutlineReviews,
  MdOutlineEmail,
  MdPersonOutline,
} from "react-icons/md";
import { LiaHorseHeadSolid } from "react-icons/lia";
import { device } from "../assets/breakpoints";

export default function Navbar() {
  const [dropdownMobile, setDropdownMobile] = useState(false);
  const handleClick = () => {
    setDropdownMobile(!dropdownMobile);
  };

  /* Styling objects for react-transition library for smooth transition between states */
  const defaultStyles = {
    width: "0px",
  };
  const transitionStyles = {
    entered: { width: "80vw" },
    exited: { width: "0" },
  };

  return (
    <>
      <Navigation>
        <Menu onClick={handleClick}>
          <CgMenuGridO />
        </Menu>
      </Navigation>
      <Transition in={dropdownMobile} timeout={300}>
        {(state) => (
          <SideNavigation
            style={{
              ...defaultStyles,
              ...transitionStyles[state],
            }}
          >
            <LogoContainer />
            <Seperator />
            <SideLinks>
              <SideListItem>
                <SideLink smooth to="/#about">
                  <StyledIcon>
                    <MdPersonOutline />
                  </StyledIcon>
                  About
                </SideLink>
              </SideListItem>
              <SideListItem>
                <SideLink smooth to="/#services">
                  <StyledIcon>
                    <LiaHorseHeadSolid />
                  </StyledIcon>
                  Services
                </SideLink>
              </SideListItem>
              <SideListItem>
                <SideLink smooth to="/#testimonials">
                  <StyledIcon>
                    <MdOutlineReviews />
                  </StyledIcon>
                  Testimonials
                </SideLink>
              </SideListItem>
              <SideListItem>
                <SideLink smooth to="/#contact">
                  <StyledIcon>
                    <MdOutlineEmail />
                  </StyledIcon>
                  Contact
                </SideLink>
              </SideListItem>
            </SideLinks>
          </SideNavigation>
        )}
      </Transition>
    </>
  );
}

const Navigation = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 80px;
  color: white;
  padding: 10px 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${device.laptop} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  background-image: url(${Logo});
  width: 230px;
  height: 100px;
  background-size: cover;
  background-position: center;
  margin: 3rem auto 1rem auto;
`;

const Menu = styled.button`
  font-size: 28px;
  color: var(--primary);
  background: none;
  border: none;
  cursor: pointer;
`;

const SideNavigation = styled.nav`
  transition: 0.3s all ease;
  height: 100vh;
  width: 80vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: var(--grey);
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.laptop} {
    display: none;
  }
`;

const SideLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const SideListItem = styled.li`
  list-style-type: none;
  margin-bottom: 3rem;
  text-align: center;
`;

const SideLink = styled(HashLink)`
  color: white;
  font-size: 14px;
  text-transform: uppercase;
`;

const Seperator = styled.hr`
  border: 0;
  height: 1px;
  width: 80%;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(255, 250, 250, 0.75),
    rgba(0, 0, 0, 0)
  );
  margin-bottom: 2rem;
`;

const StyledIcon = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  color: var(--primary);
`;
