import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from "../../context";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import { Container, Row } from "react-bootstrap";
import TypeTitle from "../../components/TypeTitle";

const Home = () => {
  const api_key = useContext(APIKEY);
  const [trends, setTrends] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getTrends();
    getMovies();
    getSeries();
  }, []);

  const getTrends = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=1`
      )
      .then((res) => {
        setTrends(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  const getMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  const getSeries = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then((res) => {
        setSeries(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container>
      <Row>
          <TypeTitle title={"Trending"}/>
          <Carousel contents={trends} />
        </Row>
        <Row>
          <TypeTitle title={"Movies"}/>
          <Carousel contents={movies} />
        </Row>
        <Row>
          <TypeTitle title={"Series"}/>
          <Carousel contents={series} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
