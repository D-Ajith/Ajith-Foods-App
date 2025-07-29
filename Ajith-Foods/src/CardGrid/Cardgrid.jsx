import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import WhyChoose from '../WhyChoose/WhyChoose';
import OrganicDeliverySection from '../OrganicDeliverySection/OrganicDeliverySection';

const ExploreMenu = ({ categories }) => {
  const navigate = useNavigate();
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <Banner />
      <div id="Why-choose">
        <WhyChoose />
      </div>
      <section className="py-12 px-4 max-w-7xl mx-auto" id="Explore-menu">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Menu</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/category/${encodeURIComponent(category.title)}`)}
              className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gray-100">
                {!loadedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-4 border-yellow-500 border-t-transparent animate-spin rounded-full"></div>
                  </div>
                )}
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  className={`h-48 w-full object-cover transition-opacity duration-500 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                <p className="text-yellow-600 text-sm mt-2 hover:underline">View All →</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <OrganicDeliverySection />
    </>
  );
};

export default ExploreMenu;
