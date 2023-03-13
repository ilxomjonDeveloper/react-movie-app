import Pagination from "@mui/material/Pagination";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Row, Container } from "./style";
import Navbar from "../../components/Navbar";
import SingleContent from "../../components/SingleContent";
import { APIKEY } from "../../context";
import { useNavigate, useParams } from "react-router-dom";

const Series = () => {
  const api_key = useContext(APIKEY);
  const { page } = useParams();
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const navigate = useNavigate();

  const changePage = (e) => {
    setCurrentPage(e.target.textContent);
    window.scroll(0, 0);
    navigate(`/series/pages/${e.target.textContent}`);
  };

  const getSeries = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((res) => {
        setSeries(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSeries();
  }, [currentPage]);
  return (
    <>
      <Navbar currentPageSeries={page} />
      <Container>
        <Row>
          {series.length !== 0 ? (
            series.map((item) => {
              return <SingleContent key={item.id} item={item} type={"tv"} />;
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

export default Series;

