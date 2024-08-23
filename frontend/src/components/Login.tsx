import React, { useState } from "react";
import useIsMobile from "../hook/useIsMobile";
import image from "../assets/signup.jpg";
import hide from "../assets/hide.png";
import see from "../assets/see.png";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  
  const handlesignup = () => {
    navigate("/signup");
  };

  const isMobile = useIsMobile();
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    <div className="flex justify-center mt-12">
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
        {!isMobile && (
          <div className="flex-shrink-0 flex items-center justify-center w-1/2">
            <img
              src={image}
              alt="Signup Illustration"
              className=" object-cover"
            />
          </div>
        )}
        <div
          className={`Signup form bg-white border shadow-xl rounded-2xl overflow-hidden ${
            isMobile ? "w-full p-6" : "w-1/2 p-12"
          }`}
        >
          <h1 className="text-3xl font-Inter font-extrabold text-[#3A244A] mb-8 flex justify-between items-center">
            <span id="1">
              Fill What We Know<span className="text-red-600">!</span>
            </span>
          </h1>

          <form className="space-y-5">
            <div>
              <input
                id="Email"
                type="text"
                placeholder="Email"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? hide : see}
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  className="h-8 w-8"
                />
              </div>
            </div>

            <button className="w-full  font-Inter bg-[#3A244A] text-white py-3 rounded-2xl font-bold hover:bg-purple-950 transition duration-300">
              Sign In
            </button>
            <button className="w-full font-Inter border-2 border-[#3A244A] bg-white  py-3 rounded-2xl font-bold hover:bg-slate-200 transition duration-300" onClick={handlesignup}>
              Sign Up
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
