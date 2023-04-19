import React from "react";
import ls from "./OneSlide.module.css";

export const OneSlide = (elem) => {
  return ( 
      <div className={ls.slide} >
        <div className={ls.card}>
          <p className={ls.card__p}>{elem.elem.title}</p>
          <img className={ls.card__img} src={elem.elem.image} alt="img_of_the_dish" />
        </div>
        <div className={ls.gradient}></div>
      </div> 
  );
};