import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import baseURL from '../baseURL';
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post(`${baseURL}api/auth/login`, form);
      localStorage.setItem('token', res.data.token);
      toast.success('Login successful!');
      navigate('/home');
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <form
        onSubmit={handleLogin}
        className="bg-white px-8 py-10 rounded-xl shadow-lg w-full max-w-md text-center"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
          Welcome Back! <span className="inline-block">👋</span>
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Log in to continue enjoying delicious meals from Ajith Foods.
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <div className="flex items-center mb-4 text-sm text-left">
          <input
            type="checkbox"
            id="showPassword"
            className="mr-2"
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition"
        >
          Log In
        </button>

        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
