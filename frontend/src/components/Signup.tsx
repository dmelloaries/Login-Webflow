import React, { useState } from "react";
import useIsMobile from "../hook/useIsMobile";
import image from "../assets/signup.jpg";
import hide from "../assets/hide.png";
import see from "../assets/see.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const isMobile = useIsMobile();
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const [error, setError] = useState("");
  const [otpError, setOtpError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.retypePassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 200) {
        setSignupSuccess(true);
      }
    } catch (err) {
      setError("Email Already Exists,Try another or Signin");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setOtpError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/verify-otp`,

        {
          email: formData.email,
          otp: parseInt(otp),
        }
      );

      if (response.status === 200) {
        console.log("OTP verified successfully");
        navigate("/home");
      }
    } catch (err) {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

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
              Let us know<span className="text-red-600">!</span>
            </span>
            <span
              id="2"
              className="text-base font-semibold underline text-end cursor-pointer"
              onClick={handleNavigateToLogin}
            >
              Sign <span className="text-red-600 underline text-end">in</span>
            </span>
          </h1>

          {!signupSuccess ? (
            <form className="space-y-5" onSubmit={handleSignup}>
              <div>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
                  required
                />
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Set Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
                  required
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
                  id="retypePassword"
                  type={showRetypePassword ? "text" : "password"}
                  placeholder="Retype Password"
                  value={formData.retypePassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
                  required
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
                  required
                >
                  <option value="">Contact Mode</option>
                  <option className="bg-white hover:bg-purple-800">
                    Email
                  </option>
                </select>
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:ring-0 placeholder-gray-500"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full font-Inter bg-[#3A244A] text-white py-3 rounded-2xl font-bold hover:bg-purple-950 transition duration-300"
              >
                Sign Up
              </button>
            </form>
          ) : (
            <form className="space-y-5" onSubmit={handleOtpSubmit}>
              <h2 className="text-xl font-bold text-center text-[#3A244A]">
                Enter the 4-digit OTP sent to your email
              </h2>
              <div className="flex justify-center space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-center border-b-2 border-gray-300 focus:outline-none focus:ring-0 text-lg placeholder-gray-500"
                    value={otp[index] || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (!isNaN(val) && val.length <= 1) {
                        setOtp((prevOtp) => {
                          const newOtp = prevOtp.split("");
                          newOtp[index] = val;
                          return newOtp.join("");
                        });
                      }
                    }}
                    required
                  />
                ))}
              </div>
              {otpError && <p className="text-red-500 text-sm">{otpError}</p>}
              <button
                type="submit"
                className="w-full font-Inter bg-[#3A244A] text-white py-3 rounded-2xl font-bold hover:bg-purple-950 transition duration-300"
              >
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
