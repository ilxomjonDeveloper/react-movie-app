import axios from "axios";
import React, { useContext, useRef } from "react";
import { APIKEY } from "../context";

const Series = () => {
  const searchInput = useRef(null);
  const api_key = useContext(APIKEY);
  const searchMovies = (e) => {
    e.preventDefault();
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchInput.current.value}&page=1&include_adult=false`
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    ;
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <input ref={searchInput} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Series;
