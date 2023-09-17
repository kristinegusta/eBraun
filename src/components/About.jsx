import React from "react";
import Section from "./Section";
import styled from "styled-components";
import Beta from "../images/beta2.jpg";
import Beta3 from "../images/Beta4.jpg";
import { device } from "../breakpoints";

export default function About() {
  return (
    <Section name="about">
      <AboutContainer>
        <Box>
          <h2>
            <Span>Elizabete Brauna</Span>
            Physiotherapist with passion for equine wellbeing
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Lorem ipsum dolor sit amet. Est ipsum debitis qui atque libero est
            odit ullam. Est harum molestias qui architecto inventore et fugit
            quia et nostrum officia et delectus voluptatem in voluptatem libero.
          </p>
          <Image src={Beta} />
        </Box>
        <Box>
          <Image src={Beta3} />
          <p style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet. Est ipsum debitis qui atque libero est
            odit ullam. Est harum molestias qui architecto inventore et fugit
            quia et nostrum officia et delectus voluptatem in voluptatem libero.
          </p>
        </Box>
      </AboutContainer>
    </Section>
  );
}

const Span = styled.span`
  color: var(--primary);
  font-family: inherit;
  display: block;
  font-size: 28px;
`;

const Image = styled.img`
  width: 100%;
`;

const Box = styled.article`
  @media ${device.tablet} {
    &:first-of-type {
      margin-left: 2rem;
    }
  }
`;

const AboutContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
  }
`;
