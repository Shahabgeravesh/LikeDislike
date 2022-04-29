import React from 'react';
import "./Header.css"
import TCards from './Cards';
import './App.css';
import SwipeButtons from "./SwipeButtons";
import Footer from "./Footer";
import Categories from "./Categories";
import {
  Routes,
  Route

} from "react-router-dom";


function App() {
  return (

    <div className="App">


      <Routes>
        <Route path="/" element={<TCards />} />
        <Route path="/Categories" element={<Categories />} />


      </Routes>



      <SwipeButtons />
      <Footer />

    </div >
  );
}

export default App;
