import React from "react";
import ls from "./Slider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const Slider = ({ dataArr }) => {
  const sliderElem = dataArr.map((e) => {
    return (
      <SplideSlide key={e.id}>
        <div className={ls.card}>
          <p className={ls.card__p}>{e.title}</p>
          <img className={ls.card__img} src={e.image} alt="img_of_the_dish" />
        </div>
        <div className={ls.gradient}></div>
      </SplideSlide>
    );
  });
  return (
    <Splide
      options={{
        perPage: 4,
        perMove: 2,
        arrows: true,
        pagination: false,
        gap: "5px",
      }}
    >
      {sliderElem}
    </Splide>
  );
};