import React from 'react';
import "./Header.css"
import Header from './Header';
import TCards from './Cards';
import './App.css';
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
      <Header />
      <TCards />

      {/* <Routes>


          <Route path="/" element={<TCards />} />

        </Routes>


      </BrowserRouter> */}


    </div >
  );
}

export default App;

// {/*Header*/ }


// {/*LikeDislike Cards*/ }

// {/*Buttons Below Cards*/ }

// {/*Chats Screen*/ }