import React from "react";
import ls from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  const sliderElem = dataArr.map((e) => {
    return (
      <div className={ls.slide} key={e.id}>
        <div className={ls.card}>
          <p className={ls.card__p}>{e.title}</p>
          <img className={ls.card__img} src={e.image} alt="img_of_the_dish" />
        </div>
        <div className={ls.gradient}></div>
      </div>
    );
  });

  return (
    <Slider {...settings}>
      {sliderElem}
    </Slider>

  );
};
