import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
    <Login></Login>
    <div className="bg-black">
     
      
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
    </>
  );
};

export default App;
