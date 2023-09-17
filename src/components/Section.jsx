import React from "react";
import { device } from "../breakpoints";
import styled from "styled-components";

const Section = ({ children, name, color }) => {
  return (
    <Wrapper id={name}>
      <Content color={color}>{children}</Content>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  padding: 5rem 0;
  width: 100%;
  z-index: 1;
  @media ${device.laptopL} {
    padding: 8rem 0;
  }
  @media ${device.desktop} {
    padding: 9rem 0;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  color: ${(props) =>
    props.color === "dark" ? "#FFFFFF" : "var(--text-dark)"};

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

// background-color: ${(props) =>
//   props.color === "dark"
//     ? "#001C3D"
//     : props.color === "lightGrey"
//     ? "#FAFBFC"
//     : props.color === "darkGrey"
//     ? "#F5F6FA"
//     : "white"};
