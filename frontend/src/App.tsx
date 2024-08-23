import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
    <Login></Login>
    <Signup></Signup>
    <div className="bg-black">

     
      
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
    </>
  );
};

export default App;
