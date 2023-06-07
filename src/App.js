
import "./App.css";
import React from 'react';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Pages } from "./components/Pages/Pages";
import { Variant } from "./components/Variant/Variant";


const App = () => {
  const [counter, setCounter] = useState(0);
  const [yourChoice, setYourChoice] = useState(new Set());
  
  const updateBasket=(val)=>{
    setCounter(counter+1);
    console.log('Counter was set',counter,val);
    setYourChoice(yourChoice.add(val));
    console.log('yourChoice=',yourChoice);
  }


  /*<Route path="/fromDB/*" element={<Main updateBasket={updateBasket}/>} />*/
  return (
    <div className="wrapper">
      <header className="header">
        <Header counter={counter} basket={yourChoice}/>
        <Navbar/>
      </header> 
      <div className="main">  
        <Routes>
          <Route path="/" element={<Pages updateBasket={updateBasket} />} />
         
          <Route path="/fromAPI2/*" element={<Pages updateBasket={updateBasket}/>} />
          <Route path="/fromAPI1/*" element={<Variant updateBasket={updateBasket.bind()}/>} />
        </Routes>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
      
    </div>
  );
};

export default App;



