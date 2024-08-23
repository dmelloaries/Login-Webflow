import React, { useState } from "react";
import useIsMobile from "../hook/useIsMobile";
import image from "../assets/signup.jpg";
import hide from "../assets/hide.png";
import see from "../assets/see.png";

const Signup = () => {
  const isMobile = useIsMobile();
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="flex justify-center mt-12">
      <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
        {!isMobile && (
          <div className="flex-shrink-0 flex items-center justify-center w-1/2">
            <img
              src={image}
              alt="Signup Illustration"
              className="h-120 w-120 object-cover"
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
              Let us know<span className="text-red-600">!</span>
            </span>
            <span id="2" className="text-base font-semibold underline text-end">
              Sign <span className="text-red-600 underline text-end">in</span>
            </span>
          </h1>

          <form className="space-y-5">
            <div>
              <input
                id="first-name"
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
            <div>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Set Password"
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
            <div className="relative">
              <input
                id="retype-password"
                type={showRetypePassword ? "text" : "password"}
                placeholder="Retype Password"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
              >
                <img
                  src={showRetypePassword ? hide : see}
                  alt={showRetypePassword ? "Hide Password" : "Show Password"}
                  className="h-8 w-8"
                />
              </div>
            </div>
            <div>
              <select
                id="contact-mode"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 text-gray-500"
              >
                <option value="">Contact Mode</option>
                <option className="bg-white hover:bg-purple-800">Email</option>
                
              </select>
            </div>

            <div>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
              />
            </div>
            <button className="w-full  font-Inter bg-[#3A244A] text-white py-3 rounded-2xl font-bold hover:bg-purple-950 transition duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
