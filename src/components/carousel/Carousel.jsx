import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card from "../card/Card";

function Carousel({ data, iconCarousel, options , width , path , handleView }) {
  return (
    <Slider {...options}>
      {data.map((item) => (
        <Card
          img={item?.background_image || item?.img_src}
          title={item?.name || item?.title}
          iconCarousel={iconCarousel ? iconCarousel : ""}
          text={item?.text}
          width={width}
          id={item.id}
          path={path}
          handleView={handleView}
        />
      ))}
    </Slider>
  );
}

export default Carousel;
