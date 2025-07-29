import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      {/* Follow Us Section */}
      <div className="text-center" id="Follow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="#"
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-600 p-4 rounded-full transition duration-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="#"
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-600 p-4 rounded-full transition duration-300"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="#"
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-600 p-4 rounded-full transition duration-300"
          >
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0b2239] text-center text-white py-10 px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="logo"
              className="w-10 h-10"
            />
            <span className="font-bold text-yellow-400 text-xl">Ajith Foods</span>
          </div>

          {/* Email */}
          <p className="text-lg font-semibold text-gray-300">Ajithfoods@gmail.com</p>

          {/* Address */}
          <p className="text-gray-400">Kphb colony Road no1, Hyderabad, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;