"use client";

import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
        Welcome back
      </h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 font-medium hover:underline">
          Sign up here
        </a>
      </p>

      <form className="space-y-5">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2"
            required
          />
          <div className="flex items-center justify-between mt-2">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
                onChange={() => setShowPassword(!showPassword)}
              />
              <span className="ml-2">Show password</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-900 transition duration-300"
        >
          Log in
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center py-3 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
        >
          <FaGoogle className="mr-2 text-lg" />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
