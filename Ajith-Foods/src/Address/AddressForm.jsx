import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddressForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('shippingAddress', JSON.stringify(formData));
    toast.success('Address saved successfully!');
    setTimeout(() => navigate('/cart'), 1500);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
      
      {/* Right: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="https://img.freepik.com/free-photo/mobile-app-location-digital-art_23-2151762885.jpg?semt=ais_hybrid&w=740"
          alt="Address"
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Left: Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        <h2 className="text-3xl font-bold text-center lg:text-left">
          Add Shipping <span className="text-yellow-600">Address</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="firstName" placeholder="First Name" onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input name="email" placeholder="Email Address" onChange={handleChange} required className="border px-3 py-2 rounded md:col-span-2" />
          <input name="street" placeholder="Street" onChange={handleChange} required className="border px-3 py-2 rounded md:col-span-2" />
          <input name="city" placeholder="City" onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input name="state" placeholder="State" onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input name="zip" placeholder="Zip Code" onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input name="country" placeholder="Country" onChange={handleChange} required className="border px-3 py-2 rounded" />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required className="border px-3 py-2 rounded md:col-span-2" />
        </div>

        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 w-full rounded"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;