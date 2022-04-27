import React from 'react';
import "./Header.css"
import TCards from './Cards';
import './App.css';
import SwipeButtons from "./SwipeButtons";
import Footer from "./Footer";
// import {
//   BrowserRouter,
//   Routes,
//   Route

// } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      {/* <BrowserRouter> */}

      <TCards />
      <SwipeButtons />
      <Footer />


      {/* <Routes>


          <Route path="/" element={<TCards />} />

        </Routes>


      </BrowserRouter> */}


    </div >
  );
}

export default App;

