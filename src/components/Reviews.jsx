import React from "react";
import Section from "./Section";
import styled from "styled-components";
import { device } from "../assets/breakpoints";
import {
  firstReview,
  secondReview,
  thirdReview,
} from "../assets/facebookReviews";

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
      <ReviewsContainer>
        <Review dangerouslySetInnerHTML={{ __html: firstReview }} />
        <Review dangerouslySetInnerHTML={{ __html: secondReview }} />
        <Review dangerouslySetInnerHTML={{ __html: thirdReview }} />
      </ReviewsContainer>
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

const ReviewsContainer = styled.section`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

const Review = styled.article`
    position: relative;
  width: 100%;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 32%;
    height: 500px;
    overflow-y: scroll;
    border-bottom: 1px solid #dddfe2;
    &::after {
        width: 100%;
        position: sticky;
        bottom: 0;
        display: flex;
        background: linear-gradient(to bottom, rgba(2, 0, 36, 0) 0%, rgb(255, 255, 255) 60%);
        content: "";
        height: 30px;
  }
`;
