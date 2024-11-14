// CartSummary.jsx
import React from "react";

const CartSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.linePrice, 0);
  const shipping = 0.0;
  const estimatedTotal = subtotal + shipping;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-full lg:w-80 text-gray-800">
      <div className="bg-pink-600 text-white rounded-lg p-4 mb-4">
        <h2 className="text-lg font-semibold">Rite Aid Rewards</h2>
        <p className="mt-1">
          Sign in to earn/redeem BonusCash and clipped coupons.
        </p>
        <div className="flex mt-3 space-x-4">
          <button className="bg-white text-pink-600 py-1 px-3 rounded-md font-medium">
            Create Account
          </button>
          <button className="bg-white text-pink-600 py-1 px-3 rounded-md font-medium">
            Sign In
          </button>
        </div>
      </div>
      <button className="w-full py-2 mb-4 bg-indigo-800 text-white rounded-lg font-semibold hover:bg-indigo-900 transition">
        Proceed to Checkout
      </button>
      <div className="flex justify-between py-2 border-b border-gray-300">
        <p>Subtotal ({items.length} Items)</p>
        <p>₹{subtotal.toLocaleString()}</p>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-300">
        <p>Shipping</p>
        <p>₹{shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-300">
        <p>Tax</p>
        <p>Not yet calculated</p>
      </div>
      <div className="py-4 border-b border-gray-300">
        <p className="font-semibold">Apply Promo Code</p>
        <input
          type="text"
          placeholder="Promo Code"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center py-4 border-b border-gray-300">
        <input type="checkbox" className="mr-2" />
        <label>Donate My Change to KidCents</label>
      </div>
      <div className="flex justify-between py-4 text-lg font-semibold">
        <p>Est. Total</p>
        <p>₹{estimatedTotal.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CartSummary;
