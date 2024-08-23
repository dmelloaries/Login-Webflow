import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="min-h-screen flex flex-col items-center text-center font-Inter">
        <div className="mt-16 px-4 md:px-0">
          <h2 className="font-bold text-white text-3xl md:text-5xl lg:text-4xl">
            India's largest{" "}
            <span className="text-yellow-400">digitally connected</span>
            <br />
            mobility and highway wayside amenities platform.
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
            <button className="text-black text-lg font-bold px-5 transition">Fastag</button>
            <button className="text-black text-lg font-bold transition">RakshaQR</button>
            <button className="text-black text-lg font-bold transition">RSA</button>
            <button className="text-black text-lg font-bold transition">Insurance</button>
            <button className="text-black text-lg font-bold transition">Raksha-Agent-Order</button>
            <button className="text-black text-lg font-bold transition">EV Charging</button>
            <button className="text-black text-lg font-bold transition">GPS</button>
            <button className="text-black text-lg font-bold transition">RakshaDial</button>
            <button className="text-black text-lg font-bold px-4 transition">Biking Events</button>
            <button className="text-black text-lg font-bold px-4 transition">Store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
