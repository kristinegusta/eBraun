import React from "react";
import styled from "styled-components";
import { device } from "../assets/breakpoints";
import Section from "./Section";

export default function Footer() {
  return (
    <Section>
      <FooterContainerSmall>
        <FooterTitle>Location</FooterTitle>
        <p>
          I am based in Leiden, the Netherlands, however I drive to many
          locations in Netherlands or Belgium.
        </p>
      </FooterContainerSmall>
    </Section>
  );
}

const FooterContainerSmall = styled.div``;

const FooterTitle = styled.h3`
  font-size: 22px;
  color: var(--text-dark);
  margin-bottom: 20px;
`;
