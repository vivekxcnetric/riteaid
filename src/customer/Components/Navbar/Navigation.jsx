// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiMenu,
//   FiSearch,
//   FiUser,
//   FiShoppingCart,
//   FiMapPin,
// } from "react-icons/fi";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isLoggedIn = user && user.token;
//   const userName = isLoggedIn ? user.user.name : null;

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     setDropdownOpen(false);
//   };

//   // Handle search box click
//   const handleSearchClick = () => {
//     navigate("/search");
//   };

//   return (
//     <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-between relative z-50">
//       {/* Left Side */}
//       <div className="flex items-center gap-4">
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           className="text-gray-600 cursor-pointer"
//         >
//           <FiMenu size={24} />
//           <span className="text-xs block text-center">Menu</span>
//         </motion.div>

//         <div className="flex items-center gap-1">
//           <Link to="/">
//             <motion.img
//               src="https://th.bing.com/th?id=OIP.HOQlpePyyJDb3IN8GuC4rQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
//               alt="Rite Aid Logo"
//               className="h-10"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.1 }}
//             />
//           </Link>
//         </div>
//       </div>

//       {/* Search Bar */}
//       {location.pathname !== "/search" && (
//         <motion.div
//           className="flex items-center border rounded-full px-4 py-2 w-1/3"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <input
//             type="text"
//             placeholder="Search"
//             className="flex-grow outline-none text-gray-700"
//             onClick={handleSearchClick} // Navigate to "/search" when clicked
//           />
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="bg-blue-800 text-white rounded-full p-2"
//           >
//             <FiSearch size={20} />
//           </motion.button>
//         </motion.div>
//       )}

//       {/* Right Side Icons */}
//       <div className="flex items-center gap-6 relative z-50">
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-1 cursor-pointer"
//         >
//           <FiMapPin size={20} />
//           <span className="text-sm text-gray-600">
//             Your Store <br />
//             <span className="font-semibold">
//               <Link to="/">Find a store</Link>
//             </span>
//           </span>
//         </motion.div>

//         <motion.div
//           onMouseEnter={toggleDropdown}
//           onMouseLeave={() => setDropdownOpen(false)}
//           whileHover={{ scale: 1.05 }}
//           className="relative flex items-center gap-1 cursor-pointer"
//         >
//           <FiUser size={20} />
//           <span className="text-sm text-gray-600">
//             {userName ? `Hi, ${userName}` : "Hi, Sign In"}
//             <br />
//             <span className="font-semibold">
//               {userName ? "Account" : <Link to="/sign-in">Account</Link>}
//             </span>
//           </span>

//           <AnimatePresence>
//             {dropdownOpen && isLoggedIn && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="absolute top-12 right-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50"
//               >
//                 <Link
//                   to="/account"
//                   className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
//                 >
//                   Account
//                 </Link>
//                 <Link
//                   to="/orders"
//                   className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
//                 >
//                   Orders
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
//                 >
//                   Logout
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           className="text-gray-600 cursor-pointer"
//         >
//           <Link to="/cart">
//             <FiShoppingCart size={24} />
//           </Link>
//         </motion.div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMapPin,
  FiClipboard,
  FiLogOut,
} from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = user && user.token;
  const userName = isLoggedIn ? user.user.name : null;

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setDropdownOpen(false);
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <nav className="bg-white shadow-md py-3 px-4 md:px-6 flex items-center justify-between relative z-50">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Menu Icon - Only visible on smaller screens */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-gray-600 cursor-pointer md:hidden"
        >
          <FiMenu size={24} />
        </motion.div>

        {/* Logo */}
        <div className="flex items-center gap-1">
          <Link to="/">
            <motion.img
              src="https://th.bing.com/th?id=OIP.HOQlpePyyJDb3IN8GuC4rQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="Rite Aid Logo"
              className="h-8 md:h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            />
          </Link>
        </div>
      </div>

      {/* Search Bar - Hidden on smaller screens */}
      {location.pathname !== "/search" && (
        <motion.div
          className="hidden md:flex items-center border rounded-full px-4 py-2 w-1/3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none text-gray-700"
            onClick={handleSearchClick}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-800 text-white rounded-full p-2"
          >
            <FiSearch size={20} />
          </motion.button>
        </motion.div>
      )}

      {/* Right Side Icons */}
      <div className="flex items-center gap-4 md:gap-6 relative z-50">
        {/* Store Selection - Hidden on smaller screens */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center gap-1 cursor-pointer"
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
          <span className="hidden md:block text-sm text-gray-600">
            {userName ? `Hi, ${userName}` : "Hi, Sign In"}
            <br />
            <span className="font-semibold">
              {userName ? "Account" : <Link to="/sign-in">Account</Link>}
            </span>
          </span>

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
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  <FiUser className="mr-2" />
                  Account
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  <FiClipboard className="mr-2" />
                  Orders
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                  <FiLogOut className="mr-2" />
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
