import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaFacebookF, FaGoogle } from "react-icons/fa";
import Logo from "../common/Logo";

const SignIn = () => {
  const [formData, setFormData] = useState({
    emailOrNumber: "",
    password: "",
    acceptTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-purple-900 flex flex-col items-center">
      {/* Logo */}
      <div className="flex justify-center pt-3 mb-1">
        <Logo className="h-40" />
      </div>

      {/* Login Card */}
      <div className="bg-white w-full max-w-[400px] rounded-3xl p-6">
        <h1 className="text-3xl text-center font-bold text-purple-900 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center">
              <FaUser className="w-6 h-6 text-purple-800" />
            </div>
            <input
              type="text"
              placeholder="Email or Number"
              value={formData.emailOrNumber}
              onChange={(e) =>
                setFormData({ ...formData, emailOrNumber: e.target.value })
              }
              className="w-full pl-14 pr-4 py-3 rounded-full border-2 border-purple-800 outline-none text-purple-800 placeholder-purple-800"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center">
              <FaLock className="w-6 h-6 text-purple-800" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full pl-14 pr-4 py-3 rounded-full border-2 border-purple-800 outline-none text-purple-800 placeholder-purple-800"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData({ ...formData, acceptTerms: e.target.checked })
              }
              className="w-4 h-4 rounded border-2 border-purple-800 text-purple-800"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-purple-800">
              Accept all terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-3 text-lg rounded-full hover:bg-purple-900/90"
          >
            Submit
          </button>
        </form>

        <div className="mt-3 text-right">
          <Link to="/forgot-password" className="text-purple-800 text-sm">
            Forgot Password
          </Link>
        </div>

        <div className="mt-6 text-center border-t border-gray-200 pt-6">
          <p className="text-purple-800 text-sm mb-1">
            {" "}
            Don&apos;t have an account?
          </p>
          <Link to="/signup" className="text-purple-800 text-lg font-semibold">
            Sign Up
          </Link>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center">
            <FaFacebookF className="text-white text-lg" />
          </button>
          <button className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center">
            <FaGoogle className="text-white text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
