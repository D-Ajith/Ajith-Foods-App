import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate=useNavigate()
  return (
    <div className="relative w-full min-h-[80vh] md:h-screen">
      {/* Background image without blur */}
      <img
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white px-4 py-10 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Get Delicious Food Anytime
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
          Eat Smart &amp; Healthy
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded text-sm sm:text-base" >
            View Menu
          </button>
          <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold py-2 px-6 rounded text-sm sm:text-base" onClick={()=>navigate('/cart')}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;