import React from "react";
import styled from "styled-components";
export default function Viewer() {
  return (
    <Container>
      <Wrap>
        <img src="images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
  }
`;
const Wrap = styled.div`
  width: 100%;
  height:100%;
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0, 69%) 0px 26px 30px -10px,
    rgb(0, 0, 0, 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition:all 250s cubic-bezier(0.25., 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    position:absolute;
    top:0;
    inset:0;
    margin:0;
    width: 100%;
    height:100%;
    object-fit: cover;
    z-index: 1;
  }
  &:hover {
    border: 3px solid white;
    transition: 0.3s ease;
    transform:scale(1.08);
    video{
        opacity:1;
    }
  }
  video{
    //   position:absolute;
      inset:0;
      z-index:-1;
      opacity:0;
      border-radius:3px;
      margin:0;
      width:100%;
      height:100%;
      object-fit:cover;
    //   padding:4px;
  }

`;
