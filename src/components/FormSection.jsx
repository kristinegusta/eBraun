import React from "react";
import Section from "./Section";
import Email from "./Email";
import { device } from "../assets/breakpoints";
import styled from "styled-components";
import Form from "../images/form.jpg";

export default function FormSection() {
  return (
    <MainWrapper>
      <Overlay />
      <Section>
        <Flex>
          <TextContainer>
            <Title>Get in touch</Title>
            <HeroP>
              PO Sed commodo suscipit neque et libero sed finibus. Morbi elit
              nulla, rutrum eu nulla eu, lacinia tincidunt ligula.
            </HeroP>
          </TextContainer>
          <FormContainer>
            <Email />
          </FormContainer>
        </Flex>
      </Section>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  background-image: url(${Form});
  background-size: cover;
  background-position: left;
  position: relative;
  background-attachment: fixed;
  @media ${device.tablet} {
    background-position: top;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2a2a2ac2;
`;

const Title = styled.h2`
  line-height: 1.1;
  margin-bottom: 20px;
  font-size: 38px;
  color: white;
`;

const HeroP = styled.p`
  color: white;
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    max-width: 65ch;
  }
`;

const TextContainer = styled.article`
  @media ${device.tablet} {
    width: 50%;
  }
`;

const FormContainer = styled.div`
  @media ${device.tablet} {
    width: 50%;
  }
`;

const Flex = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
`;
