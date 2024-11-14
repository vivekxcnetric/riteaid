import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../customer/Components/Product/ProductDetails/ProductDetails";
import Product from "../customer/Components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Navigation from "../customer/Components/Navbar/Navigation";
import Cart from "../customer/Components/Cart/Cart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../customer/Components/orders/Order";
import OrderDetails from "../customer/Components/orders/OrderDetails";
import Checkout from "../customer/Components/Checkout/Checkout";
import Footer from "../customer/Components/footer/Footer";
import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/Components/ReviewProduct/RateProduct";
import NotFound from "../Pages/Notfound";

import Login from "../customer/Components/Auth/LoginPage";
import RegisterPage from "../customer/Components/Auth/RegisterPage";

import HeaderTop from "../customer/Components/Navbar/HeaderTop";
import ShoppingCart from "../customer/Components/Navbar/ShoppingCartModel";
import NewArrivals from "../Pages/NewArrivals";
import SunglassClp from "../Pages/SunglassClp";
import Profile from "../customer/Components/Auth/Profile";
import TransactionComponent from "../customer/Components/Checkout/TransactionComponent";
import { App } from "../customer/Components/App";
import PrivateRoute from "../customer/Components/PrivateRoute";
import PromoComponent from "../customer/Components/Navbar/PromoComponent";

const CustomerRoutes = () => {
  const location = useLocation();

  // Only show Navigation component when not on the NotFound page
  const showNavigation = location.pathname !== "*";

  // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
      <ThemeProvider theme={customerTheme}>
        <PromoComponent />
        {showNavigation && <Navigation />}
        <HeaderTop />
        <Routes>
          <Route path="/sign-in" element={<Login />}></Route>
          <Route path="/sign-up" element={<RegisterPage />}></Route>
          {/* <Route path="/register" element={<Homepage />}></Route> */}

          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/search" element={<App />}></Route>

          <Route element={<PrivateRoute />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/sunglass-clp" element={<SunglassClp />}></Route>
            <Route path="/my-account" element={<Profile />}></Route>
            <Route
              path="/terms-condition"
              element={<TearmsCondition />}
            ></Route>
            <Route path="/shopping-cart" element={<ShoppingCart />}></Route>

            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/:lavelOne/:lavelTwo/:lavelThree"
              element={<Product />}
            ></Route>

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/orders" element={<Order />}></Route>
            <Route
              path="/account/order/:orderId"
              element={<OrderDetails />}
            ></Route>
            <Route
              path="/account/rate/:productId"
              element={<RateProduct />}
            ></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/payment" element={<TransactionComponent />}></Route>

            <Route
              path="/payment/:orderId"
              element={<PaymentSuccess />}
            ></Route>

            {/* <Route path="/shops" element={<Product />}></Route> */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default CustomerRoutes;
