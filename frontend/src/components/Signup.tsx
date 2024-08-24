import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../hook/useIsMobile";
import image from "../assets/signup.jpg";
import axios from "axios";
import SignupForm from "../utils/SignupForm";
import OtpForm from "../utils/OtpForm";

const Signup = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
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

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
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
      setError("Email Already Exists, Try another or Sign in");
    }
  };

  const handleOtpSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        navigate("/login");
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
              className="object-cover"
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
            <SignupForm
              formData={formData}
              handleChange={handleChange}
              handleSignup={handleSignup}
              error={error}
            />
          ) : (
            <OtpForm
              otp={otp}
              setOtp={setOtp}
              handleOtpSubmit={handleOtpSubmit}
              otpError={otpError}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
