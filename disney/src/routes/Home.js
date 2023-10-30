import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewer from "../components/Viewer";
import Recommends from "../components/Recommends";
import { useEffect } from "react";
import { movieRequest } from "../helper/serverHelper";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {
  selectRecommend,
  selectNewDisney,
  selectOriginal,
  selectTrending,
} from "../features/movie/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const recommendMovies = useSelector(selectRecommend);
  const newDisneyMovies = useSelector(selectNewDisney);
  const trendingMovies = useSelector(selectTrending);
  const originalMovies = useSelector(selectOriginal);
  
  useEffect(() => {
    let recommend = [];
    let newDisney = [];
    let trending = [];
    let original = [];
    const fetchData = async () => {
      try {
        const movies = await getDocs(collection(db, "movies"));
        movies.forEach((movie) => {
          if (movie.data().type === "new")
            newDisney = [...newDisney, { id: movie.id, ...movie.data() }];
          else if (movie.data().type === "recommend")
            recommend = [...recommend, { id: movie.id, ...movie.data() }];
          else if (movie.data().type === "original")
            original = [...original, { id: movie.id, ...movie.data() }];
          else trending = [...trending, { id: movie.id, ...movie.data() }];
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
        console.log(error);
      }
    };

    try {
      fetchData();
      // console.log(recommendMovies.size())
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
