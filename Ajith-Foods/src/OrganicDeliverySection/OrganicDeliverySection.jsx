import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrganicDeliverySection = () => {
  const navigate=useNavigate()
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section 1: Fresh Organic Fruits */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Image */}
          <div className="flex justify-center md:w-1/2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="Healthy Food"
              className="w-64 md:w-80"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Fresh, Healthy, Organic, Delicious Fruits
            </h2>
            <p className="text-gray-600 mb-6">
              Say no to harmful chemicals and go fully organic with our range of fresh fruits and
              veggies. Pamper your body and your senses with the true and unadulterated gifts from
              mother nature.
            </p>
           <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700" onClick={() => (window.location.href = "https://youtu.be/dZejdBmYC3k?si=PMv4OqsAIWoIcAsx")}>
              Watch Video
            </button>
          </div>
        </div>

        {/* Section 2: Delivery and Payment */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text and Payment Info */}
          <div className="md:w-2/3 text-center md:text-left" id="Payment">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Delivery and Payment
            </h2>
            <p className="text-gray-600 mb-6">
              Enjoy hassle-free payment with the plenitude of payment options available for you. Get
              live tracking and locate your food on a live map. It's quite a sight to see your food
              arrive to your door. Plus, you get a 5% discount on every order every time you pay
              online.
            </p>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 mb-4" onClick={()=>navigate('/cart')}>
              Order Now
            </button>

            {/* Payment logos */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Visa" className="w-12" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="MasterCard" className="w-12" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="w-12" />
              <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="AmEx" className="w-12" />
            </div>
          </div>

          {/* Offer Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4370/4370477.png"
              alt="25% Off"
              className="w-48 md:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicDeliverySection;