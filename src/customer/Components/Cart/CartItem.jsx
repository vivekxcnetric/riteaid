import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
// import {
//   removeCartItem,
//   updateCartItem,
// } from "../../../Redux/Customers/Cart/Action";

import {
  getCartItems,
  RemoveCartItemNew,
  updateCartQtyNEW,
} from "../../../action/cart";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { grey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({
  item,
  showButton = true, // Default to true if not provided
}) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  // console.log(item?.id, "item---------");

  const handleUpdateQuantity = (num) => {
    const updatedQuantity = item.quantity + num;
    if (updatedQuantity < 1) return; // Prevent quantity less than 1

    updateCartQtyNEW({ lineId: item.id, quantity: updatedQuantity }).then(
      dispatch(getCartItems())
    );
  };
  const handleRemoveItem = () => {
    // Dispatch the RemoveCartItemNew action to remove the item from the cart
    dispatch(RemoveCartItemNew(item.id));
  };

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, [dispatch, updateCartQtyNEW]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
      className="flex flex-col lg:flex-row items-center justify-between p-5 bg-white rounded-lg shadow mb-4"
    >
      {/* Product Details */}
      <div className="flex items-center w-full lg:w-2/3">
        <div className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0">
          <img
            src={item?.productVariant?.featuredAsset?.url}
            alt={item.productVariant.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-gray-800 text-lg">
              {item.productVariant.name}
            </h2>
            {/* Uncomment and customize if needed */}
            {/* <p className="opacity-70">Size: {item.size}, White</p>
            <p className="opacity-70 mt-2">Seller: {item.product.brand}</p> */}
            <p className="text-gray-500 text-sm">
              Unit Price: ${item.productVariant.price.toLocaleString()}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {item.weight || "Weight not specified"}
            </p>
            <p className="text-sm text-gray-500">
              {item.deliveryTime || "Delivery time not specified"}
            </p>
            {/* Offers */}
            {item.offer && (
              <p className="text-sm text-pink-600 font-medium mt-1">
                {item.offer} -{" "}
                <span className="underline text-blue-600 cursor-pointer">
                  Add more items to qualify
                </span>
              </p>
            )}
            {item.bonusCash && (
              <p className="text-sm text-purple-600 font-medium flex items-center mt-1">
                🎁 BonusCash Offer
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Quantity and Actions */}
      {showButton && (
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-1/3 mt-4 lg:mt-0">
          {/* Quantity Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleUpdateQuantity(-1)}
              className={`px-2 py-1 border ${
                item.quantity <= 1 ? "bg-gray-300" : "bg-white"
              }`}
            >
              -{" "}
            </button>

            <span className="px-4 py-1 border rounded-sm text-center w-12">
              {item.quantity}
            </span>

            <button
              onClick={() => handleUpdateQuantity(1)}
              className={`px-2 py-1 border `}
            >
              +{" "}
            </button>
          </div>

          {/* Remove Button */}
          <button onClick={handleRemoveItem} className="text-indigo-800">
            <DeleteIcon />
          </button>
        </div>
      )}

      {/* Price */}
      <div className="mt-4 lg:mt-0 text-right w-full lg:w-auto">
        <p className="font-semibold text-lg text-gray-800">
          ${item?.linePrice}
        </p>
        {/* Optional: Display discounted price or original price */}
        {/* <p className="opacity-50 line-through">
          ₹{(item.productVariant.originalPrice / 100).toFixed(2)}
        </p> */}
        {/* <p className="text-green-600 font-semibold mt-1">10% off</p> */}
      </div>
    </motion.div>
  );
};

export default CartItem;
