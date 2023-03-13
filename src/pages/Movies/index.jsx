import Pagination from "@mui/material/Pagination";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Row, Container } from "./style";
import Navbar from "../../components/Navbar";
import SingleContent from "../../components/SingleContent";
import { APIKEY } from "../../context";
import { useNavigate, useParams } from "react-router-dom";

const Movies = () => {
  const api_key = useContext(APIKEY);
  const { page } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const navigate = useNavigate();

  const changePage = (e) => {
    setCurrentPage(e.target.textContent);
    window.scroll(0, 0);
    navigate(`/movies/pages/${e.target.textContent}`);
  };

  const getMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, [currentPage]);
  return (
    <>
      <Navbar currentPageMovies={page} />
      <Container>
        <Row>
          {movies.length !== 0 ? (
            movies.map((item) => {
              return <SingleContent key={item.id} item={item} type={"movie"}/>;
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </Row>
      </Container>

      <Pagination
        onChange={changePage}
        className="pagination"
        defaultPage={+page}
        count={500}
        color="primary"
      />
    </>
  );
};

export default Movies;
