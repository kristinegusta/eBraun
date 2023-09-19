import React from "react";
import styled from "styled-components";
import { device } from "../assets/breakpoints";
import Section from "./Section";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "../images/elizabete.png";

export default function Footer() {
  return (
    <Section name="contact">
      <FooterContainer>
        <LogoContainer />
        <FooterContainerSmall>
          <FooterTitle>Location</FooterTitle>
          <p>
            I am located in Leiden, the Netherlands, but I frequently travel to
            various destinations within the Netherlands and Belgium.
            <br />
            <br />
            Woudstraat 23 <br></br>
            EN 6104 Leiden <br></br>
            Netherlands
          </p>
        </FooterContainerSmall>
        <FooterContainerSmall>
          <FooterTitle>Contact</FooterTitle>
          <p>
            <Icon>
              <FiMail />
            </Icon>
            elizabete@elizabete.com
          </p>
          <p>
            <Icon>
              <FaWhatsapp />
            </Icon>
            +31 22112277
          </p>
          <p>
            <Icon>
              <FaInstagram />
            </Icon>
            pringlelv
          </p>
        </FooterContainerSmall>
      </FooterContainer>
      <Seperator />
      <FooterFooter>
        2023 © E’Braun equestrian・Powered by <span>Logo</span>
      </FooterFooter>
    </Section>
  );
}

const LogoContainer = styled.div`
  display: none;
  background-image: url(${Logo});
  width: 270px;
  background-size: contain;
  background-position: center;
  margin-bottom: 3rem;
  @media ${device.tablet} {
    display: block;
  }
`;

const FooterContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around;
  }
`;

const FooterContainerSmall = styled.div`
  margin-bottom: 3rem;
  p {
    text-align: center;
    margin-bottom: 1rem;
  }
  @media ${device.tablet} {
    width: 270px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 22px;
  color: var(--text-dark);
  margin-bottom: 20px;
  text-align: center;
`;

const Icon = styled.span`
  color: var(--primary);
  display: block;
`;

const Seperator = styled.hr`
  border: 0;
  height: 1px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(134, 134, 134, 0.75),
    rgba(0, 0, 0, 0)
  );
  margin: 0 auto 1rem auto;
`;

const FooterFooter = styled.div`
  font-size: 11px;
  text-align: center;
`;
