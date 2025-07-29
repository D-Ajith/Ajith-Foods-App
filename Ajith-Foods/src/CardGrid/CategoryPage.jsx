import React, { memo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { addToCart, buyNow } from '../Cart/Cart';
import { toast } from 'react-toastify';
import { useState } from 'react';

const CategoryPage = ({ data }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filtered = data.filter(
    item => item.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10 capitalize">
        {categoryName}
      </h2>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, index) => (
            <ItemCard key={index} item={item} navigate={navigate} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">No items found.</p>
      )}
    </div>
  );
};

// ✅ Memoized card component to avoid re-renders
const ItemCard = memo(({ item, navigate }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4 flex flex-col justify-between">
      <Link to={`/item/${item.id}`}>
        <div className="relative w-full h-48 mb-4">
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
          )}
          <img
            loading="lazy"
            src={error ? "/fallback-image.png" : item.image}
            alt={item.title}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
        <p className="text-black-900 text-md mb-1">Price: ₹{item.price}</p>
        <p className="text-black-900 text-md mb-3">Rating: ⭐ {item.rating.rate}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-auto">
        <button
          onClick={() => {
            addToCart(item);
            toast.success("Item added to cart!");
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition w-full sm:w-auto"
        >
          Add to Cart
        </button>

        <button
          onClick={() => {
            buyNow(item);
            toast.success("Item added for purchase!");
            setTimeout(() => navigate('/cart'), 1500);
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition w-full sm:w-auto"
        >
          Order Now
        </button>
      </div>
    </div>
  );
});

export default CategoryPage;
