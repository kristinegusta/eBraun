import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import Logo from "../images/logo-white.png";
import { BsInstagram } from "react-icons/bs";
import { device } from "../breakpoints";

export default function NavbarDesktop() {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBackground("var(--grey)");
      } else {
        setNavbarBackground("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar style={{ backgroundColor: navbarBackground }}>
      <FullHeightLink smooth to="/#hero">
        <LogoContainer />
      </FullHeightLink>
      <Container>
        <Links>
          <Link>
            <SideLink smooth to="/#about">
              About
            </SideLink>
          </Link>
          <Link>
            <SideLink smooth to="/#services">
              Services
            </SideLink>
          </Link>
          <Link>
            <SideLink smooth to="/#testimonials">
              Testimonials
            </SideLink>
          </Link>
          <Link>
            <SideLink smooth to="/#contact">
              Contact
            </SideLink>
          </Link>
        </Links>
        <ContactElement>
          <StyledIcon>
            <BsInstagram />
          </StyledIcon>
          pringelv
        </ContactElement>
      </Container>
    </Navbar>
  );
}

const Navbar = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 100px;
  color: white;
  padding: 10px 2rem;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s ease;
  @media ${device.laptop} {
    display: flex;
    padding: 10px 5rem;
  }
  @media ${device.laptopL} {
    padding: 10px 7rem;
  }
  @media ${device.desktop} {
    padding: 10px 10rem;
  }
`;

const LogoContainer = styled.div`
  background-image: url(${Logo});
  width: 180px;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const FullHeightLink = styled(HashLink)`
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.laptopL} {
    width: 50%;
  }
`;

const Links = styled.ul`
  display: flex;
`;

const Link = styled.li`
  list-style-type: none;
  margin-right: 2rem;
`;

const ContactElement = styled.div`
  display: flex;
  align-items: center;
`;

const SideLink = styled(HashLink)`
  color: white;
  font-size: 13px;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 12px;
  &:before {
    content: "";
    background: var(--primary);
    height: 1px;
    position: absolute;
    bottom: -8px;
    left: 1px;
    transition: 0.25s ease;
    width: 0;
  }
  &:hover:before {
    width: 100%;
  }
`;

const StyledIcon = styled.div`
  font-size: 16px;
  margin-right: 8px;
  height: 16px;
`;
