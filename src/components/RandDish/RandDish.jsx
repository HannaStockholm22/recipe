import React from "react";
import { useEffect, useState } from "react";
import ls from "./RandDish.module.css";
import "@splidejs/react-splide/css";
import { Carousel } from "../Carousel/Carousel";
import { Slider } from "../Slider/Slider";

export const RandDish = () => {
  const [popular, setPopular] = useState([]);
  const [veggie, setVeggie] = useState([]);
  const api2=[
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY_SPOON}&number=9`,
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY_SPOON}&number=9&tags="veggie"`
  ]

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
        console.log("jData=", jData);
        console.log("popular=", jData.recipes);
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
        console.log("respons=", response.ok, "  status=", response.status);
      } else {
        alert(" Error HTTP:", response.status);
      }
    }
  };

  return (
    <div className="container">
      <div className={ls.wrapper}>
        <h3 className={ls.title}>  Random popular dish:</h3>
        <Slider dataArr={popular} />  
        <h3 className={ls.title}> Random veggie dish:</h3>
        <Carousel dataArr={veggie} />          
      </div>
    </div>
  );
};
