import React from "react";
import Section from "./Section";
import styled from "styled-components";
import { device } from "../breakpoints";
import { ReactComponent as Performance } from "../svg/performance-svgrepo-com 1.svg";
import { ReactComponent as Bridge } from "../svg/bridge-svgrepo-com 1.svg";
import { ReactComponent as Horse } from "../svg/horse-black-shape-of-polygons-svgrepo-com 1.svg";

export default function Services() {
  return (
    <Section name="services" color="dark" noTopPadding>
      <article>
        <Title>Treatment tailored to your needs </Title>
        <p>
          As your dedicated equine physiotherapist, I recognize the uniqueness
          of each horse. My approach ensures that your equine partner receives
          personalized care designed exclusively for them.
        </p>
      </article>
      <ServicesCards>
        <ServiceCard>
          <ServiceCardHeader>
            <Performance />
          </ServiceCardHeader>
          <ServiceCardTitle>Increased performance</ServiceCardTitle>
          <p>
            Through expert physiotherapy techniques and personalized care, we
            can together enhance strength, agility, and overall performance of
            your horse.
          </p>
        </ServiceCard>
        <ServiceCard>
          <ServiceCardHeader>
            <Bridge />
          </ServiceCardHeader>
          <ServiceCardTitle>Faster rehabilitation</ServiceCardTitle>
          <p>
            Accelerate healing and minimize downtime. Get your beloved equine
            companion back in action, healthier and more resilient than ever.
          </p>
        </ServiceCard>
        <ServiceCard>
          <ServiceCardHeader>
            <Horse />
          </ServiceCardHeader>
          <ServiceCardTitle>Eliminate pain</ServiceCardTitle>
          <p>
            Proven methods to identify and address sources of pain, leaving your
            horse free to live life without restrictions.
          </p>
        </ServiceCard>
      </ServicesCards>
    </Section>
  );
}

const Title = styled.h2`
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

const ServicesCards = styled.section`
  margin-top: 3rem;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

const ServiceCard = styled.article`
  margin-bottom: 3rem;
  @media ${device.tablet} {
    margin-bottom: 0;
    width: 31%;
  }
`;

const ServiceCardHeader = styled.div`
  height: 80px;
`;

const ServiceCardTitle = styled.h3`
  color: var(--primary);
  margin-bottom: 12px;
  font-size: 22px;
`;
