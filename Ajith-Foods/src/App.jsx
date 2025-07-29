import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import ScrollToTop from './ScrollToTop/ScrollToTop';
import CategoryPage from './CardGrid/CategoryPage';
import Cardgrid from './CardGrid/Cardgrid';
import ItemDetail from './CardGrid/ItemDetail';
import CartPage from './Cart/CartPage';
import Footer from './Footer/Footer';
import AddressForm from './Address/AddressForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Welcome from './Pages/Welcome';

const App = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation(); // 👈 Get current route

  useEffect(() => {
   fetch("https://thingproxy.freeboard.io/fetch/https://api.jsonbin.io/v3/b/6865023f8a456b7966b9fcc4")
      .then((res) => res.json())
      .then((res) => {
        const records = res.record;
        setData(records);

        const categoryMap = {};
        records.forEach((item) => {
          const category = item.category.toLowerCase();
          if (category !== 'javascript' && !categoryMap[category]) {
            categoryMap[category] = {
              title: item.category,
              image: item.image
            };
          }
        });

        const categoryArray = Object.values(categoryMap);
        setCategories(categoryArray);
      })
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  // Routes where Navbar and Footer should be hidden
  const hideNavbarFooterRoutes = ['/', '/login', '/signup'];
  const shouldHide = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <div className="pt-20">
      {!shouldHide && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Cardgrid categories={categories} />} />
        <Route path="/category/:categoryName" element={<CategoryPage data={data} />} />
        <Route path="/item/:itemId" element={<ItemDetail data={data} />} />
        <Route path="/add-address" element={<AddressForm />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
     <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;