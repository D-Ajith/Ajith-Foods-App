import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        Welcome to Ajith Foods 🍽️
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
        Experience the joy of fresh, fast, and delicious food delivered straight to your doorstep.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
        >
          Signup
        </button>
        <button
          onClick={() => navigate('/home')}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
        >
          Continue as Guest
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Ajith Foods?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" // Burger emoji SVG
            alt="Burger"
            className="h-12 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm">
            We deliver hot and fresh meals to your doorstep in record time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/burger-with-cold-drink-illustration-download-in-svg-png-gif-file-formats--fastfood-fast-food-pack-illustrations-3425157.png?f=webp" // French fries emoji SVG
            alt="Fries"
            className="h-12 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Healthy & Organic</h3>
          <p className="text-gray-600 text-sm">
            All our ingredients are fresh, organic, and locally sourced.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/028/900/505/non_2x/pizza-icon-design-free-png.png" // Pizza emoji SVG
            alt="Pizza"
            className="h-12 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">
            Our team is here to assist you anytime, day or night.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
