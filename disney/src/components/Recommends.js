import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Recommends({ title, recommend }) {
  return (
    <>
      <Container>
        <h4>{title}</h4>
        {recommend === undefined || recommend === null ? (
          <Loading>
            <Icon icon="eos-icons:bubble-loading" />
          </Loading>
        ) : (
          <Content>
            {recommend.map((movie, key) => (
              <Wrap key={key}>
                <Link to={"/detail/" + movie.id}>
                  <img src={movie.cardImg} alt="" />
                </Link>
              </Wrap>
            ))}
          </Content>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 25px 25px;
  width: 100%;
  height: 100%;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: inherit + 5px;
  }
`;
const Content = styled.div`
  padding: 0px;
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  position: relative;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  width: 100%;
  height: 100%;
  position: relative;
  inset: 0;
  border: 3px solid rgb(249, 249, 249, 0.1);
  border-radius: 8px;
  // box-shadow: rgb(0, 0, 0, 69%) 0px 26px 30px -10px,
  //   rgb(0, 0, 0, 69%) 0px 16px 10px -10px;
  &:hover {
    transform: scale(1.08);
    border: 3px solid white;
    transition: 0.5s ease;
  }
  img {
    position: absolute;
    inset: 0px;
    width: 100%;
    height:100%
    object-fit: cover;
  }
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
`;
