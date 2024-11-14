import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartItems,
  RemoveCartItemNew,
  updateCartQtyNEW,
} from "../../../action/cart";
import { toast, Toaster } from "react-hot-toast";
import CartItem from "./CartItem";

const getEstimatedDeliveryDate = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  return currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
};

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store?.cartItems?.cartItems?.cart); // Using optional chaining to avoid destructuring error
  const [showCouponForm, setShowCouponForm] = useState(false);
  const estimatedDeliveryDate = getEstimatedDeliveryDate();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleRemoveItemFromCart = (lineId) =>
    dispatch(RemoveCartItemNew(lineId));
  const handleUpdateCartQty = (lineId, newQty) => {
    updateCartQtyNEW({ lineId, quantity: newQty }, toast).then(() =>
      dispatch(getCartItems())
    );
  };

  const toggleCouponForm = () => setShowCouponForm(!showCouponForm);
  const subtotal =
    cart?.lines?.reduce((acc, item) => acc + item.linePrice, 0) || 0;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart?.lines?.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <Toaster />
          <div className="lg:w-2/3">
            {cart?.lines?.map((item) => (
              <div key={item.id} className="border-t py-4">
                <CartItem item={item} />
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 space-y-4">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <div>
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>₹0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <Link to="/checkout?step=1" className="block mt-4">
                  <button className="bg-indigo-800 text-white w-full py-2 rounded-md font-semibold">
                    Checkout Now
                  </button>
                </Link>
                <div className="flex justify-center mt-4 space-x-2">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKaYFu855kzoydaqxJyEJZPwLXkbBG2OPlA&s"
                    alt="Visa"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-md border shadow-md">
              <p className="font-semibold">Apply Promo Code</p>
              <input
                type="text"
                placeholder="Promo Code"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EmptyCart = () => (
  <div className="flex flex-col items-center p-12">
    <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
    <p className="text-gray-500">You haven't added any items yet.</p>
    <Link to="/" className="text-blue-600 font-medium underline mt-4">
      Continue Shopping
    </Link>
  </div>
);

export default Cart;
