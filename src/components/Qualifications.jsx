import React from "react";
import styled from "styled-components";
import Beta from "../images/Beta1.png";
import { device } from "../breakpoints";

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
            orem ipsum dolor sit amet
          </QualificationsListItem>
          <QualificationsListItem>
            orem ipsum dolor sit amet
          </QualificationsListItem>
          <QualificationsListItem>
            orem ipsum dolor sit amet
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
    height: 700px;
  }
`;

const QualificationsText = styled.article`
  @media ${device.tablet} {
    & p {
      max-width: 65ch;
    }
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
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
