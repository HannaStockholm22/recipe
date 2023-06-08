import React from "react";
import { useEffect, useState } from "react";
import ls from "./RandDish.module.css";
import "@splidejs/react-splide/css";
import { Carousel } from "../Carousel/Carousel";
import { Slider } from "../Slider/Slider";

export const RandDish = ({updateBasket,api2}) => {
  const [popular, setPopular] = useState([]);
  const [veggie, setVeggie] = useState([]);
 

 useEffect(() => {
    getData("randpopular",api2[0]);
    getData("randveggie",api2[1]);
  }, []);

  
  const getData = async (inData,api) => {

    const check = localStorage.getItem(inData);
    if (check) {
      switch(inData){
        case'randpopular':
        setPopular(JSON.parse(check));
        break;
        case'randveggie':
        setVeggie(JSON.parse(check));
        break;
        default: console.log(`Sorry, we are out of ${inData}`);
      }
     
    } else {
      const response = await fetch(api);
      if (response.ok) {
        const jData = await response.json();
        localStorage.setItem(inData, JSON.stringify(jData.recipes));
        switch(inData){
          case'randpopular':
          setPopular(jData.recipes);
          break;
          case'randveggie':
          setVeggie(jData.recipes);
          break;
          default: console.log(`Sorry, we are out of ${inData}`);
        }
      } else {
        alert(" Error HTTP:", response.status);
      }
    }
  };

  return (
    <div className="container">
      <div className={ls.wrapper}>
        <h3 className={ls.title}>  Random popular dish:</h3>
        <Slider dataArr={popular} updateBasket={updateBasket}/>  
        <h3 className={ls.title}> Random veggie dish:</h3>
        <Carousel dataArr={veggie} updateBasket={updateBasket}/>          
      </div>
    </div>
  );
};
