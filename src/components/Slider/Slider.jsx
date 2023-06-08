import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { OneSlide } from "../OneSlide/OneSlide";

export const Slider = ({ dataArr ,updateBasket}) => {
  const sliderElements = dataArr.map((e,index) => {
    return (
      <SplideSlide key={e.id}>
         <OneSlide elem={e} i={index} updateBasket={updateBasket}/>
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
       {sliderElements}
    </Splide>
  );
};