import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";
export default function Details() {
  const fetchMovie = async () => {
    const moviesRef = collection(db, "movies");
    const Data = await getDocs(moviesRef);
    Data.forEach((movie) => {
      if (movie.id == id) {
        setMovieData(movie.data());
      }
    });
  };
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  useEffect(() => {
    fetchMovie();
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={movieData.backgroundImg} alt="" />
      </Background>
      <ImgTitle>
        <img src={movieData.titleImg} alt={movieData.title} />
      </ImgTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <Group>
            <img src="/images/group-icon.png" alt="" />
          </Group>
        </Controls>
        <SubTitle>
          <div>{movieData.subTitle}</div>
        </SubTitle>
        <Description>
          <div>{movieData.description}</div>
        </Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  top: 70px;
  max-height: 100vh;
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
      // width: initial;
    }
  }
`;
const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  height: 30vw;
  min-height: 170px;
  // background-color:red;
  padding-bottom: 24px;
  margin: 0px auto;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
  // background:black;
`;
const Controls = styled.div`
  margin-bottom: 20px;
  display: flex;
`;
const Player = styled.button`
  margin: 0px 22px 0px 0px;
  // background:white;
  // color:black;
  font-size: 16px;
  padding: 6px 22px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background: rgb(249, 249, 249);
  border-radius: 5px;
  letter-spacing: 1.8px;
  text-align: center;
  cursor: pointer;
  text-transform: upperCase;
  img {
    width: 32px;
  }
  &:hover {
    transform: scaleX(1.01);
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgb(0, 0, 0, 0.3);
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddList = styled.div`
  background: rgb(0, 0, 0, 0.5);
  height: 55px;
  width: 55px;
  margin-right: 22px;
  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
    margin-right: 10px;
  }
  border: 2px solid rgb(249, 249, 249);
  border-radius: 100%;
  cursor: pointer;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    background: rgb(198, 198, 198);
  }
  span {
    border: 2px solid rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translatex(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.5);
  border-radius: 100%;
  border: 2px solid rgb(249, 249, 249);
  width: 55px;
  height: 55px;
  @media (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
  img {
    width: 95%;
    heigth: 95%;
  }
`;
const SubTitle = styled.div`
  font-size: 20px;
  min-height: 25px;
  color: rgb(249, 249, 249);
  letter-spacing: 1.08px;
  @media (max-width: 768px) {
    font-size: 17px;
    min-height: 20px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 17px;
  letter-spacing: 1.02px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 15px;
    min-height: 20px;
  }
`;
