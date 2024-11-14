import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Redux/Auth/Action"; // Import the login action
import { Toaster, toast } from "react-hot-toast";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle between login and signup
  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Validate the form
  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!isLogin && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      if (isLogin) {
        await dispatch(login(userData, navigate, toast)); // Dispatch the login action with API call
      } else {
        // Implement signup action or API call here for signup
        console.log("Signup Details:", formData); // Replace with dispatch(signup(userData)) if signup action exists
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-2xl bg-gray-100">
      <Toaster />
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
        <img
          src={
            "https://th.bing.com/th?id=OIP.HOQlpePyyJDb3IN8GuC4rQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          }
          alt=""
          className="h-16 item-center mx-auto"
        />
        <h3 className="text-center text-xl font-semibold mb-6">
          {isLogin ? "Sign In" : "Create an account"}
        </h3>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">
            Email Address / Username
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@youremail.com"
            required
            className="w-full p-2 border rounded-md mb-4"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}

          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full p-2 border rounded-md mb-4"
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}

          {!isLogin && (
            <>
              <label className="block mb-2 font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="w-full p-2 border rounded-md mb-4"
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword}</p>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            {isLogin ? "Continue" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <button onClick={toggleMode} className="text-blue-500 underline">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={toggleMode} className="text-blue-500 underline">
                Sign In
              </button>
            </>
          )}
        </p>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>
          <a href="#" className="underline">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Privacy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Accessibility
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            CA Privacy
          </a>{" "}
          |{" "}
          <a href="#" className="underline">
            Do Not Sell My Personal Information
          </a>
        </p>
        <p className="mt-2">&copy; 2024 Rite Aid Corp. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default AuthForm;
