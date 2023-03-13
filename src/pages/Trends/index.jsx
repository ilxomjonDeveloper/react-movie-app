import Pagination from "@mui/material/Pagination";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Row, Container } from "./style";
import Navbar from "../../components/Navbar";
import SingleContent from "../../components/SingleContent";
import { APIKEY } from "../../context";
import { useNavigate, useParams } from "react-router-dom";

const Trends = () => {
  const api_key = useContext(APIKEY);
  const { page } = useParams();
  const [trends, setTrends] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const navigate = useNavigate();

  const changePage = (e) => {
    setCurrentPage(e.target.textContent);
    window.scroll(0, 0);
    navigate(`/trends/pages/${e.target.textContent}`);
  };

  const getTrends = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${currentPage}`
      )
      .then((res) => {
        setTrends(res.data.results);
      });
  };

  useEffect(() => {
    getTrends();
  }, [currentPage]);
  return (
    <>
      <Navbar currentPageTrends={page} />
      <Container>
        <Row>
          {trends.length !== 0 ? (
            trends.map((item) => {
              return <SingleContent key={item.id} item={item} type={"trend-movie"} />;
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

export default Trends;
