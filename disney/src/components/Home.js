import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewer from "./Viewer";
import Recommends from "./Recommends";
import { useEffect } from "react";
import { movieRequest } from "../helper/serverHelper";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import {
  selectRecommend,
  selectNewDisney,
  selectOriginal,
  selectTrending,
} from "../features/movie/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let trending = [];
  let original = [];
  const recommendMovies = useSelector(selectRecommend);
  const newDisneyMovies = useSelector(selectNewDisney);
  const trendingMovies = useSelector(selectTrending);
  const originalMovies = useSelector(selectOriginal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await movieRequest("movie/");
        movies.map((movie) => {
          if (movie.type === "new") newDisney = [...newDisney, movie];
          else if (movie.type === "recommend")
            recommend = [...recommend, movie];
          else if (movie.type === "original") original = [...original, movie];
          else trending = [...trending, movie];
        });
        dispatch(
          setMovies({
            recommend: recommend,
            newDisney,
            trending,
            original,
          })
        );
      } catch (error) {
        console.log(error)
      }
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Recommends title="Recommended For You" recommend={recommendMovies} />
      <Recommends title="New to Disney+" recommend={newDisneyMovies} />
      <Recommends title="Originals" recommend={originalMovies} />
      <Recommends title="Trending" recommend={trendingMovies} />
    </Container>
  );
}

const Container = styled.div`
position:relative;
min-height:calc(100vh - 250px);
overflow-x:hidden;
top:72px;
padding: 0 calc(3.5vw - 5px);

&:after {
  content:"";
  background:url("/images/home-background.png") center center / cover no-repeat fixed;
  position:absolute;
  top:0px;
  inset: 0px;
  overflow-y:hidden;
  padding:0;
  opacity:1;
  z-index : -1;
// }
`;
