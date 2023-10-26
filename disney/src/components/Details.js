import React from "react";
import styled from "styled-components";

export default function Details() {
  return (
    <Container>
      <Background>
        <img src="/images/slider-badag.jpg" alt="hello" />
      </Background>
      <ImgTitle>hello</ImgTitle>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  top: 70px;
  // max-height:100vh;
  min-height: calc(100vh - 250px);
  padding: 0px calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  padding: 0px;
  opacity: 0.8;
  z-index: -1;
  img {
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImgTitle = styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:flex-start;
  color:black;
  background: yellow;
  width: 100px;
  height: 100px;
`;
