import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { APIKEY } from "../../context";
import { StyledSingleMovie } from "./style";
import Navbar from "../../components/Navbar";

const SingleMovie = () => {
  const api_key = useContext(APIKEY);
  const [singleMovie, setSingleMovie] = useState({});
  let { id } = useParams();

  const getSingleMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setSingleMovie(res.data);
      });
  };
  useEffect(() => {
    getSingleMovie();
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <StyledSingleMovie
        backdrop_path={`https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${singleMovie?.backdrop_path}`}
      ></StyledSingleMovie>
      ;
    </>
  );
};

export default SingleMovie;
