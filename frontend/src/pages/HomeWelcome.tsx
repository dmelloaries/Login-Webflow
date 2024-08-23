import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";

const HomeWelcome = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    createdAt: "",
  });
  const [error, setError] = useState(null);

  const fetchUserDetails = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Token not found. Please log in again.");
      navigate("/");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/user-details`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUserDetails(response.data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      setError("Failed to fetch user details. Please try again.");
      navigate("/"); // Navigate to home if there's an error fetching details
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="bg-black">
        <HomeNavbar  userDetails={userDetails} error={error} />
      </div>

      <div className="min-h-screen flex flex-col items-center text-center font-Inter">
        <div className="mt-16 px-4 md:px-0">
          <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-4xl">
            Welcome <span className="text-yellow-400">Home</span>
            <br />
           This is mobility and highway wayside amenities platform.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div>
            <p className="text-yellow-400 text-2xl font-bold">1.8 million+</p>
            <p>customers</p>
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">2 lakh+</p>
            <p>KMs of NH and SH verified data</p>
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">5 lakh+</p>
            <p>verified POIs</p>
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">25000+</p>
            <p>Customer Touch points</p>
          </div>
        </div>

        <div className="mt-10 bg-yellow-400 py-4 rounded-2xl mx-4 md:mx-20 lg:mx-32">
          <div className="flex flex-wrap justify-center space-x-4">
            <button className="text-black text-lg font-bold px-5 transition">
              Fastag
            </button>
            <button className="text-black text-lg font-bold transition">
              RakshaQR
            </button>
            <button className="text-black text-lg font-bold transition">
              RSA
            </button>
            <button className="text-black text-lg font-bold transition">
              Insurance
            </button>
            <button className="text-black text-lg font-bold transition">
              Raksha-Agent-Order
            </button>
            <button className="text-black text-lg font-bold transition">
              EV Charging
            </button>
            <button className="text-black text-lg font-bold transition">
              GPS
            </button>
            <button className="text-black text-lg font-bold transition">
              RakshaDial
            </button>
            <button className="text-black text-lg font-bold px-4 transition">
              Biking Events
            </button>
            <button className="text-black text-lg font-bold px-4 transition">
              Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWelcome;
