import React from "react";
import Section from "./Section";
import { device } from "../assets/breakpoints";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import HeroImage from "../images/hero.jpg";
import { FiChevronsDown } from "react-icons/fi";
import Div100vh from "react-div-100vh";

export default function Hero() {
  return (
    <MainWrapper>
      <Overlay />
      <Section name="hero">
        <header>
          <Title data-aos="fade-left" data-aos-duration="1000">
            Achieving Equine Harmony - E'Braun Equine Physiotherapy
          </Title>
          <HeroP data-aos="fade-left" data-aos-duration="1000">
            Balancing, Enhancing, and Transforming Every Stride.
          </HeroP>
          <ReadMore
            data-aos="fade-left"
            data-aos-duration="1000"
            smooth
            to="/#about"
          >
            Read more
            <DownIcon />
          </ReadMore>
        </header>
      </Section>
    </MainWrapper>
  );
}

const MainWrapper = styled(Div100vh)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: left;
  position: relative;
  @media ${device.laptopL} {
    background-position: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2a2a2ac2;
`;

const ReadMore = styled(HashLink)`
  text-transform: uppercase;
  margin-top: 2rem;
  display: block;
  color: var(--text-dark);
  padding: 12px 32px;
  background-color: #ffffff;
  letter-spacing: 2px;
  font-size: 12px;
  width: max-content;
  display: flex;
  border: 1px solid white;
  align-items: center;
  transition: 0.2s ease;
  &:hover {
    color: white;
    border-color: white;
    background: none;
  }
`;

const Title = styled.h1`
  line-height: 1.1;
  margin-bottom: 20px;
  font-size: 38px;
  color: white;
  @media ${device.laptop} {
    font-size: 48px;
  }
  @media ${device.laptopL} {
    font-size: 56px;
  }
`;

const DownIcon = styled(FiChevronsDown)`
  margin-left: 4px;
  font-size: 16px;
`;

const HeroP = styled.p`
  color: white;
  font-weight: 300;
  font-size: 18px;
`;
