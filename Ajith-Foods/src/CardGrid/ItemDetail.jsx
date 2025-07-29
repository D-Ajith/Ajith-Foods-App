import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart, buyNow } from '../Cart/Cart';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ItemDetail = ({ data }) => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const item = data.find(i => i.id === parseInt(itemId));
  if (!item) return <p className="text-center text-gray-600 mt-10">Item not found</p>;

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.title} added to cart!`, {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const handleBuyNow = () => {
    buyNow(item);
    toast.success(`Proceeding to checkout for ${item.title}`, {
      position: 'top-center',
      autoClose: 1500,
    });
    setTimeout(() => navigate('/cart'), 1600);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-yellow-500 hover:text-yellow-600 font-semibold mb-6 transition"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="md:w-1/2 w-full">
          <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy" // ✅ lazy loading for better performance
              className="object-contain h-full w-full"
            />
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h1>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <p className="text-lg font-semibold text-gray-900 mb-2">Price: ₹{item.price}</p>
          <p className="text-black-600 font-medium mb-6">Rating: ⭐ {item.rating.rate}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
