import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkoutStripePayemt,
  getCartItems,
  placeOrder,
} from "../../../action/cart";
import { toast } from "react-hot-toast";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { FaStripe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const inputClasses = "border p-2 rounded w-full";
const buttonClasses = "p-2 rounded bg-blue-500 text-white w-full";
const stripeButtonClasses = "rounded bg-blue-500 text-white w-full";
const checkboxClasses = "mr-2";

const TransactionComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store?.cartItems?.cartItems?.cart);
  const auth = useSelector((store) => store?.auth?.user?.user);

  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    landmark: "",
    streetLine1: "",
    streetLine2: "",
    city: "",
    postalCode: "",
    countryCode: "",
    phoneNumber: "",
    state: "",
  });
  const [payPalProceed, setPayPalProceed] = useState(false);
  const conversionRate = 0.013; // Example conversion rate from INR to USD
  const shippingAdd = JSON.parse(localStorage.getItem("shippingAddress"));
  const [shippingInfo, setShippingInfo] = useState(shippingAdd);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPaypalScript = async () => {
      paypalDispatch({
        type: "resetOptions",
        value: {
          "client-id":
            "AUKvP8ae0aMLtrs2Fxk76rEV_02atz98Zn_mkIFlBpmogGo2iAzBc4iLeKhIDxCOKuPAg6R70OgNOClL",
          currency: "USD",
        },
      });
      paypalDispatch({ type: "setLoadingStatus", value: "pending" });
    };
    loadPaypalScript();
  }, [paypalDispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleCheckboxChange = () => {
    setShowShippingInfo(!showShippingInfo);
    if (!showShippingInfo) {
      setBillingInfo(shippingInfo);
    }
  };

  const handleInputChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleStripePayment = async () => {
    let email =
      auth.email || JSON.parse(localStorage.getItem("userInfo")).email;
    try {
      await checkoutStripePayemt(cart, email);
    } catch (error) {
      toast.error("Stripe payment failed");
    }
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async function (details) {
      const paymentData = {
        cartId: cart?.id,
        shippingAddress: shippingInfo,
      };
      try {
        placeOrder(paymentData).then((response) => {
          dispatch(getCartItems());
        });
        toast.success("Order is paid");
        navigate(`/payment/${cart?.id}`);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  };

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: cart?.total },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  };

  const onError = (err) => {
    toast.error(err.message);
  };

  return (
    <div className="mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-2">Billing Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={inputClasses}
                  placeholder="First Name"
                  value={billingInfo.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={inputClasses}
                  placeholder="Last Name"
                  value={billingInfo.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="streetLine1" className="block mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                name="streetLine1"
                id="streetLine1"
                className={inputClasses}
                placeholder="Address Line 1"
                value={billingInfo.streetLine1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="streetLine2" className="block mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                name="streetLine2"
                id="streetLine2"
                className={inputClasses}
                placeholder="Address Line 2"
                value={billingInfo.streetLine2}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="postalCode" className="block mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  className={inputClasses}
                  placeholder="Postal Code"
                  value={billingInfo.postalCode}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="city" className="block mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className={inputClasses}
                  placeholder="City"
                  value={billingInfo.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className={inputClasses}
                  placeholder="State"
                  value={billingInfo.state}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="countryCode" className="block mb-1">
                  Country code
                </label>
                <input
                  type="text"
                  name="countryCode"
                  id="countryCode"
                  className={inputClasses}
                  placeholder="Country Code"
                  value={billingInfo.countryCode}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={inputClasses}
                  placeholder="Phone"
                  value={billingInfo.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="different-shipping"
              className={checkboxClasses}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="different-shipping">
              My Billing and Shipping address are same
            </label>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Order Details</h2>
          <div className="border p-4 rounded">
            <div className="flex justify-between mb-2">
              <span>Order </span>
              <span>#{cart?.id || "000058049"}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Coupon Code</span>
              <a href="#" className="text-blue-500">
                Apply
              </a>
            </div>
            <div className="flex justify-between mb-2">
              <span>Order Amount</span>
              <span>$ {cart?.total || "26700.00"}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Amount</span>
              <span>{`$ ${cart?.total || "26700.00"}`}</span>
            </div>
            <div className="mt-5 max-width-200">
              <button
                className={stripeButtonClasses}
                onClick={handleStripePayment}
              >
                Pay with{" "}
                <FaStripe
                  className="inline-block mr-2"
                  style={{ fontSize: "2.7rem" }}
                />
              </button>
            </div>
            <div className="mt-5 max-width-200">
              <PayPalButtons
                style={{
                  layout: "horizontal",
                  label: "pay",
                  tagline: true,
                }}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={onError}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionComponent;
