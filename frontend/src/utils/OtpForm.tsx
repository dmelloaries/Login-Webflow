import React, { useRef } from "react";

const OtpForm = ({ otp, setOtp, handleOtpSubmit, otpError }) => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value;

    if (!isNaN(val) && val.length <= 1) {
      setOtp((prevOtp) => {
        const newOtp = prevOtp.split("");
        newOtp[index] = val;
        return newOtp.join("");
      });

      if (val && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const val = e.target.value;

    if (e.key === "Backspace" && !val && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleOtpSubmit}>
      <h2 className="text-xl font-bold text-center text-[#3A244A]">
        Enter the 4-digit OTP sent to your email
      </h2>
      <div className="flex justify-center space-x-2">
        {[0, 1, 2, 3].map((index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center border-b-2 border-gray-300 focus:outline-none focus:ring-0 text-lg placeholder-gray-500"
            value={otp[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
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
  );
};

export default OtpForm;
