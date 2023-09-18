import React from "react";
import { device } from "../assets/breakpoints";
import styled from "styled-components";

const Section = ({ children, name, color, notoppadding }) => {
  return (
    <Wrapper color={color} id={name} notoppadding={notoppadding}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;
  padding: ${(props) => (props.notoppadding ? "0 0 5rem 0" : "5rem 0")};
  background-color: ${(props) =>
    props.color === "dark" ? "var(--background-dark)" : "unset"};
  @media ${device.laptop} {
    padding: ${(props) => (props.notoppadding ? "0 0 8rem 0" : "8rem 0")};
  }
  @media ${device.desktop} {
    padding: ${(props) => (props.notoppadding ? "0 0 9rem 0" : "9rem 0")};
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
