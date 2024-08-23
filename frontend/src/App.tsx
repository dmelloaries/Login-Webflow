import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Signup from "./components/Signup";
import HomeWelcome from "./pages/HomeWelcome";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomeWelcome />} />
        <Route path="/profile" element={<ProfilePage></ProfilePage>} />
      </Routes>
    </Router>
  );
};

export default App;
