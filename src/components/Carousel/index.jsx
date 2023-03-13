import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SingleContent from "../SingleContent";

const responsive = {
  0: {
    items: 1,
    itemsFit: "contain",
  },
  568: {
    items: 2,
  },
  768: {
    items: 3
  },
  992: {
    items: 3,
  },
  1024: {
    items: 4,
    itemsFit: "contain",
  },
  1140: {
    items: 5,
    itemsFit: "contain",
  }
};

const Carousel = ({ contents }) => {
  const items = contents.map((item) => <SingleContent item={item} />);
  return (
    <AliceCarousel
      responsive={responsive}
      autoPlay
      autoPlayStrategy="none"
      disableButtonsControls
      autoPlayInterval={1000}
      animationDuration={1000}
      infinite
      mouseTracking
      items={items}
    />
  );
};

export default Carousel;
