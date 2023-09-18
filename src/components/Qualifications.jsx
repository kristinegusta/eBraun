import React from "react";
import styled from "styled-components";
import Beta from "../images/Beta1.png";
import { device } from "../assets/breakpoints";

export default function Qualifications() {
  return (
    <QualificationsContainer>
      <QualificationsImage />
      <QualificationsText>
        <h2>Expertise and qualifications</h2>
        <p>
          Passionate about the health and happiness of horses, I am Elizabete
          Brauna, a dedicated equine physiotherapist. I specialize in providing
          top-notch care to ensure your horse's optimal performance and comfort.
        </p>
        <QualificationsList>
          <QualificationsListItem>
            Certified in Equine Rehabilitation
          </QualificationsListItem>
          <QualificationsListItem>
            Extensive experience in equine injury recovery
          </QualificationsListItem>
          <QualificationsListItem>
            Trained in advanced equine massage techniques
          </QualificationsListItem>
          <QualificationsListItem>
            Expertise in equine nutrition and dietary management
          </QualificationsListItem>
        </QualificationsList>
      </QualificationsText>
    </QualificationsContainer>
  );
}

const QualificationsContainer = styled.section`
  padding: 0 16px;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
`;

const QualificationsImage = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  background-image: url(${Beta});
  background-size: cover;
  background-position: center;
  @media ${device.tablet} {
    width: 50%;
    margin: 0;
    height: unset;
  }
`;

const QualificationsText = styled.article`
  @media ${device.tablet} {
    & p {
      max-width: 65ch;
    }
    padding: 5rem 3rem;
    width: 50%;
    @media ${device.laptop} {
      padding: 8rem 3rem;
    }
    @media ${device.desktop} {
      padding: 9rem 3rem;
    }
  }
`;

const QualificationsList = styled.ul`
  margin-top: 20px;
  list-style: none;
  color: var(--text-lighter);
`;

const QualificationsListItem = styled.li`
  margin: 20px 0 20px 36px;
  &::before {
    content: "✓";
    color: var(--primary);
    font-size: 20px;
    margin-right: 10px;
  }
`;
