import React from 'react';
import { FaUtensils, FaAppleAlt, FaTags } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10">
          We use both original recipes and classic versions of famous food items.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <FaUtensils className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Food Service</h3>
            <p className="text-gray-600">
              Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you nothing less than perfect.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <FaAppleAlt className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh Food</h3>
            <p className="text-gray-600">
              The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <FaTags className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Offers</h3>
            <p className="text-gray-600">
              Food Coupons & Offers up to <strong>50% OFF</strong> and Exclusive Promo Codes on All Online Food Orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;