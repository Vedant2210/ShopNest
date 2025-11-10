import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images.png';
import cartIcon from '../assets/shoppingcart.png'; 
import '../App.css'; 

const Navbar = () => {
  const { cart } = useContext(UserContext);
  const navigate = useNavigate();

  let totalCount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCount += cart[i].quantity ? cart[i].quantity : 1;
  }

  return (
    <div className="shadow-md">

      <nav className="bg-green-300 h-16 flex items-center justify-between px-6">
      
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
            SHOPNEST
          </h2>
          <img
            src={logo}
            alt="ShopNest Logo"
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>

       
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200 shadow-md hover:shadow-lg"
        >
          <img
            src={cartIcon}
            alt="Cart Icon"
            className="w-5 h-5 object-contain"
          />
          <span>My Cart ({totalCount})</span>
        </button>
      </nav>

      {/* Marquee section */}
      <div className="marquee-container bg-green-200 py-1">
        <p className="marquee-text text-gray-800 font-medium">
          🎉 Welcome to ShopNest — Enjoy exclusive discounts and limited-time offers! 🛍️
        </p>
      </div>
    </div>
  );
};

export default Navbar;
