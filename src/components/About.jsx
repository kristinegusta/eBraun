import React from "react";
import Section from "./Section";
import styled from "styled-components";
import Beta from "../images/beta2.jpg";
import Beta3 from "../images/Beta4.jpg";
import { device } from "../breakpoints";

export default function About() {
  return (
    <Section name="about" color="dark">
      <AboutContainer>
        <Box>
          <h2>
            <Span>Elizabete Brauna</Span>
            Physiotherapist with passion for equine wellbeing
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Passionate about the health and happiness of horses, I am Elizabete
            Brauna, a dedicated equine physiotherapist. With years of experience
            and a deep commitment to the wellbeing of these magnificent
            creatures, I specialize in providing top-notch care to ensure your
            horse's optimal performance and comfort. Trust me to be your partner
            in promoting equine wellness and vitality.
          </p>
          <Image src={Beta} />
        </Box>
        <Box>
          <Image src={Beta3} />
          <p style={{ marginTop: "20px" }}>
            With a profound understanding of equine physiology and a keen eye
            for detail, I've dedicated my career to helping horses thrive.
            Whether it's alleviating pain, enhancing performance, or ensuring a
            swift recovery, I bring expertise, compassion, and a true passion
            for equine wellbeing to every session. Your horse deserves the best,
            and I'm here to provide it.
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
