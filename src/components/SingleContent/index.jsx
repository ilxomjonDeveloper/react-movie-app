import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "./style";

const SingleContent = ({ item, type }) => {
  
  const rate = item?.vote_average;
  const changeRate = (rate) => {
    if (rate > 7.5) return "#137043";
    if (rate > 5) return "#d8db1d";
    return "#f31c47";
  };
  const changeDate = ([year, month, day]) => {
    switch(month) {
      case "01": return `Jan ${day}, ${year}`;
      case "02": return `Feb ${day}, ${year}`;
      case "03": return `March ${day}, ${year}`;
      case "04": return `April ${day}, ${year}`;
      case "05": return `May ${day}, ${year}`;
      case "06": return `June ${day}, ${year}`;
      case "07": return `July ${day}, ${year}`;
      case "08": return `Aug ${day}, ${year}`;
      case "09": return `Sep ${day}, ${year}`;
      case "10": return `Oct ${day}, ${year}`;
      case "11": return `Nov ${day}, ${year}`;
      case "12": return `Jan ${day}, ${year}`;
      default: return "";
    }
  }
  const dateArr = item?.release_date ? item?.release_date.split("-") : item?.first_air_date.split("-");
  return (
    <Col>
      <Link to={`/movie/${item.id}`} draggable="false">
        <Card>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
            alt="poster img"
          />
          <div style={{ background: changeRate(rate) }}>
            <span>
              {Math.round(rate * 10)}
              <sup>%</sup>
            </span>
          </div>
          <h2>{item?.title || item?.name}</h2>
          <p>{changeDate(dateArr)}</p>
        </Card>
      </Link>
    </Col>
  );
};

export default SingleContent;
