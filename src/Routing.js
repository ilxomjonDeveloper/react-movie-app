import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Search from "./pages/Search";
import Trends from "./pages/Trends";
import SingleMovie from "./pages/SingleMovie";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trends/pages/:page" element={<Trends />} />
        <Route path="/movies/pages/:page" element={<Movies />} />
        <Route path="/series/pages/:page" element={<Series />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
