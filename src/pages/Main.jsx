import React, { useContext, useEffect } from "react";
import axios from "axios";
import { APIKEY } from "../context";

const Main = () => {
  const api_key = useContext(APIKEY);
  const getAllTrendMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1`
      )
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllTrendMovies();
  });

  return <div>Main</div>;
};

export default Main;
