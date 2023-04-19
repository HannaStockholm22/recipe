import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { OneSlide } from "../OneSlide/OneSlide";

export const Carousel = ({ dataArr }) => {
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
   
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          
          }
        },

      ]
}

const sliderElements = dataArr.map((e) => {
  return (
    <div key={e.id}>
       <OneSlide elem={e}/>
    </div>
  );
});
   
  return (
    <Slider {...settings}>
     {sliderElements}
    </Slider>

  );
};
