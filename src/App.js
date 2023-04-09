
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
  const updateBasket=()=>{
    setCounter(counter+1);
  }
  
  return (
    <div className="wrapper">
      <header className="header">
        <Header counter={counter}/>
        <Navbar/>
      </header> 
      <div className="main">  
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/fromDB/*" element={<Main />} />
          <Route path="/fromAPI2/*" element={<Pages/>} />
          <Route path="/fromAPI1/*" element={<Variant/>} />
        </Routes>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;



