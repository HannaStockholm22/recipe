import "./App.css";
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Book } from "./components/Book/Book";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Pages } from "./components/Pages/Pages";
import { Variant } from "./components/Variant/Variant";
import { message } from "antd";

const App = () => {
  
  const [basket, setBasket] = useState(()=>{
    const b = localStorage.getItem("myBasket");
    return b?JSON.parse(b):[];
    });
    const [counter, setCounter] = useState(()=>{return basket.length;});

    const [messageApi, contextHolder] = message.useMessage();
 
  const api1 = "https://www.themealdb.com/api/json/v1/1/";
  const api2=[
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY_SPOON}&number=9`,
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY_SPOON}&number=9&tags="veggie"`
  ]
 
  const updateBasket = (val) => {
 
    let rez = basket.find(i => i.idMeal === val.idMeal);
    if (rez === undefined) {
      setCounter(counter + 1);
      const b = [...basket, val];
      setBasket(b);
      localStorage.setItem("myBasket", JSON.stringify(b));

    } else {
      messageApi.open({
        type: "warning",
        content: "This dish is already in your basket",
      });
    }
  };

   const deleteItem =(index)=>{
    basket.splice(index,1)
    setBasket(basket);
    localStorage.setItem("myBasket", JSON.stringify(basket));
    setCounter(counter - 1);
   }

  /*<Route path="/fromDB/*" element={<Main updateBasket={updateBasket}/>} />*/
  return (
    <div className="wrapper">
      {contextHolder}
      <header className="header">
        <Header counter={counter} />
        <Navbar />
      </header>

      <div className="main">
        <Routes>
          <Route path="/" element={<Pages updateBasket={updateBasket} />} />
          <Route
            path="/fromAPI2/*"
            element={<Pages updateBasket={updateBasket} api2={api2}/>}
          />
          <Route
            path="/fromAPI1/*"
            element={<Variant updateBasket={updateBasket} api1={api1} />}
          />
          <Route path="/fromBook/*" element={<Book basket={basket} deleteItem={deleteItem}/>} />
        </Routes>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
