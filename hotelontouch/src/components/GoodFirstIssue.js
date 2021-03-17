import React from "react";
import styled from "styled-components";
import Github from "../assets/github.png";

function GoodFirstIssue() {
  return (
    <Wrapper>
      <ContentWrapper>
        <SectionTitle style={{ fontFamily: "Times New Roman" }}>
          Try good{" "}
          <span
            style={{
              fontsize: "1.2em",
              fontWeight: "600",
              fontStyle: "italic",
              color: "#565fa1"
            }}
          >
            first
          </span>{" "}
          issue
        </SectionTitle>
        <Text>❝ Make your first open-source contribution ❞</Text>
        <Button
          href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch/contribute"
          target="_blank"
        >
          Contribute
        </Button>
      </ContentWrapper>
      <ImageWrapper>
        <Image src={Github} alt="github" />
      </ImageWrapper>
    </Wrapper>
  );
}

export default GoodFirstIssue;

const SectionTitle = styled.h1`
  font-family: "Times New Roman", Times, serif, "Lucida Sans", Arial, sans-serif;
  font-size: 3em;
  font-weight: 500;
  line-height: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Text = styled.h4`
  position: relative;
  font-family: sans-serif;
  font-size: 1.5em;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 40px;
  padding: 8px 20px;
  margin-top: 15px;
  background: #565fa1;
  font-family: sans-serif;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: 130px;
    display: block;
    margin: 0 auto;
`;

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  margin-top: 80px;
`;

const ContentWrapper = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  justify-self: center;
  width: 250px;
  height: 233px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  height: 300px;
`;
