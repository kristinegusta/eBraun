import React from "react";
import Section from "./Section";
import styled from "styled-components";
import { device } from "../assets/breakpoints";

export default function Reviews() {
  return (
    <Section name="testimonials" color="dark">
      <article>
        <Title>What clients say</Title>
        <p>
          Hear directly from clients who have shared their stories about the
          care provided by Elizabete Brauna, our dedicated equine
          physiotherapist.
        </p>
      </article>
      <div className="elfsight-app-624b2944-96d0-4233-a75d-6a7ba0b89829"></div>
    </Section>
  );
}

const Title = styled.h2`
  & + p {
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    text-align: center;
    & + p {
      text-align: center;
      max-width: 65ch;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
