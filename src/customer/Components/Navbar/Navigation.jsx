import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Get user and token from state
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isLoggedIn = user && user.token; // Check if user is logged in
  const userName = isLoggedIn ? user.user.name : null; // Get user's name if logged in

  // Toggle dropdown on click
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Logout function (add your actual logout logic here)
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch logout action if you have one
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-between relative z-50">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-gray-600 cursor-pointer"
        >
          <FiMenu size={24} />
          <span className="text-xs block text-center">Menu</span>
        </motion.div>

        {/* Logo */}
        <div className="flex items-center gap-1">
          <Link to="/">
            <motion.img
              src="https://th.bing.com/th?id=OIP.HOQlpePyyJDb3IN8GuC4rQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="Rite Aid Logo"
              className="h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            />
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <motion.div
        className="flex items-center border rounded-full px-4 py-2 w-1/3"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <input
          type="text"
          placeholder="Search"
          className="flex-grow outline-none text-gray-700"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-800 text-white rounded-full p-2"
        >
          <FiSearch size={20} />
        </motion.button>
      </motion.div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6 relative z-50">
        {/* Store Selection */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 cursor-pointer"
        >
          <FiMapPin size={20} />
          <span className="text-sm text-gray-600">
            Your Store <br />
            <span className="font-semibold">
              <Link to="/">Find a store</Link>
            </span>
          </span>
        </motion.div>

        {/* Account Dropdown */}
        <motion.div
          onMouseEnter={toggleDropdown}
          onMouseLeave={() => setDropdownOpen(false)}
          whileHover={{ scale: 1.05 }}
          className="relative flex items-center gap-1 cursor-pointer"
        >
          <FiUser size={20} />
          <span className="text-sm text-gray-600">
            {userName ? `Hi, ${userName}` : "Hi, Sign In"}
            <br />
            <span className="font-semibold">
              {userName ? "Account" : <Link to="/sign-in">Account</Link>}
            </span>
          </span>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {dropdownOpen && isLoggedIn && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
              >
                <Link
                  to="/account"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  Account
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Cart Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-gray-600 cursor-pointer"
        >
          <Link to="/cart">
            <FiShoppingCart size={24} />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;