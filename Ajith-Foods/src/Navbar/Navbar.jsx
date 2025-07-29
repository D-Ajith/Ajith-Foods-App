// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { getCart } from '../Cart/Cart';

// const Navbar = () => {
//   const [cartCount, setCartCount] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const updateCount = () => {
//     const cart = getCart();
//     const count = cart.reduce((total, item) => total + item.quantity, 0);
//     setCartCount(count);
//   };

//   useEffect(() => {
//     updateCount();
//     window.addEventListener('cartUpdated', updateCount);
//     return () => window.removeEventListener('cartUpdated', updateCount);
//   }, []);

//   // Smooth scroll after navigation
//   const handleNavClick = (id) => {
//     if (location.pathname !== '/home') {
//       navigate('/home', { replace: false });
//       // Delay scroll to allow homepage to render
//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (el) el.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     } else {
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <div className="flex items-center space-x-3">
//           <img
//             src="https://i.pinimg.com/474x/db/8c/ec/db8cec1e6cecc768cfe5a35fb8d1d85e.jpg"
//             alt="Logo"
//             className="w-12 h-12 rounded-full object-cover"
//           />
//           <span className="text-xl font-bold">Ajith Foods</span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6 font-medium">
//           <button onClick={() => handleNavClick('Why-choose')} className="hover:text-yellow-600">Why Choose Us</button>
//           <button onClick={() => handleNavClick('Explore-menu')} className="hover:text-yellow-600">Explore Menu</button>
//            <Link to="/add-address" className="hover:text-yellow-600">Delivery Address</Link>
//           <button onClick={() => handleNavClick('Follow')} className="hover:text-yellow-600">Follow Us</button>
//           <Link to="/cart" className="hover:text-yellow-600">🛒 Cart ({cartCount})</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl focus:outline-none">
//           {isMenuOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden px-6 pb-4 bg-white space-y-3 border-t text-sm font-medium">
//           <button onClick={() => handleNavClick('Why-choose')} className="block hover:text-blue-600">Why Choose Us</button>
//           <button onClick={() => handleNavClick('Explore-menu')} className="block hover:text-blue-600">Explore Menu</button>
//           <button onClick={() => handleNavClick('add-address')} className="block hover:text-blue-600">Delivery Address</button>
//           <button onClick={() => handleNavClick('Follow')} className="block hover:text-blue-600">Follow Us</button>
//           <Link to="/cart" className="block hover:text-blue-600">🛒 Cart ({cartCount})</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getCart } from '../Cart/Cart';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const updateCount = () => {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  useEffect(() => {
    updateCount();
    window.addEventListener('cartUpdated', updateCount);

    // Check login status
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    return () => window.removeEventListener('cartUpdated', updateCount);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleNavClick = (id) => {
    if (location.pathname !== '/home') {
      navigate('/home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pinimg.com/474x/db/8c/ec/db8cec1e6cecc768cfe5a35fb8d1d85e.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-xl font-bold">Ajith Foods</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <button onClick={() => handleNavClick('Why-choose')} className="hover:text-yellow-600">Why Choose Us</button>
          <button onClick={() => handleNavClick('Explore-menu')} className="hover:text-yellow-600">Explore Menu</button>
          <Link to="/add-address" className="hover:text-yellow-600">Delivery Address</Link>
          <button onClick={() => handleNavClick('Follow')} className="hover:text-yellow-600">Follow Us</button>
          <Link to="/cart" className="hover:text-yellow-600">🛒 Cart ({cartCount})</Link>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-red-600 hover:underline">Logout</button>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-600">Login</Link>
              <Link to="/signup" className="hover:text-yellow-600">Signup</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl focus:outline-none">
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white space-y-3 border-t text-sm font-medium">
          <button onClick={() => handleNavClick('Why-choose')} className="block hover:text-blue-600">Why Choose Us</button>
          <button onClick={() => handleNavClick('Explore-menu')} className="block hover:text-blue-600">Explore Menu</button>
          <button onClick={() => handleNavClick('add-address')} className="block hover:text-blue-600">Delivery Address</button>
          <button onClick={() => handleNavClick('Follow')} className="block hover:text-blue-600">Follow Us</button>
          <Link to="/cart" className="block hover:text-blue-600">🛒 Cart ({cartCount})</Link>

          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-red-600 block hover:underline">Logout</button>
          ) : (
            <>
              <Link to="/login" className="block hover:text-blue-600">Login</Link>
              <Link to="/signup" className="block hover:text-blue-600">Signup</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
