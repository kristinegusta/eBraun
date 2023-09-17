import React from "react";
import { device } from "../breakpoints";
import styled from "styled-components";

const Section = ({ children, name, color }) => {
  return (
    <Wrapper color={color} id={name}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  padding: 5rem 0;
  width: 100%;
  z-index: 1;
  background-color: ${(props) =>
    props.color === "dark" ? "var(--background-dark)" : "unset"};
  @media ${device.laptopL} {
    padding: 8rem 0;
  }
  @media ${device.desktop} {
    padding: 9rem 0;
  }
`;

const Content = styled.section`
  margin: 0 auto;
  padding: 0 16px;
  @media ${device.mobileL} {
    max-width: 650px;
  }
  @media ${device.tablet} {
    max-width: 800px;
  }
  @media ${device.laptop} {
    max-width: 1000px;
  }
  @media ${device.laptopL} {
    max-width: 1100px;
  }
  @media ${device.desktop} {
    max-width: 1300px;
  }
`;
