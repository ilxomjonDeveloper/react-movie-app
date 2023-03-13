import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "./style";

const Navbar = ({currentPageTrends, currentPageMovies, currentPageSeries}) => {
  return (
    <StyledNavbar>
      <Link to="/" className="logo">
        TheMovie
      </Link>
      <ul>
        <li className="nav_link">
          <Link to={`/trends/pages/${currentPageTrends || "1"}`}>Trends</Link>
        </li>
        <li className="nav_link">
          <Link to={`/movies/pages/${currentPageMovies || "1"}`}>Movies</Link>
        </li>
        <li className="nav_link">
          <Link to={`/series/pages/${currentPageSeries || "1"}`}>Series</Link>
        </li>
        <li className="nav_link">
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <div className="nav_addition">
        <select name="lang" id="lang">
          <option value="uz">UZ</option>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
