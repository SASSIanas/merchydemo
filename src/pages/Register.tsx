import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Mail, Lock, Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [type, setType] = useState("customer"); // customer | partner
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", form, "Type:", type);
  };

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center bg-gradient-to-b  from-emerald-50 to-white px-4 py-2">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl  border border-emerald-200">
          <div className="scale-75">
          <h1 className="text-3xl font-bold text-emerald-700 text-center mb-6">
            Create an Account
          </h1>

          {/* Type Selection */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setType("customer")}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                type === "customer"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-emerald-600 border border-emerald-600"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setType("partner")}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                type === "partner"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-emerald-600 border border-emerald-600"
              }`}
            >
              Partner
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2">
              <User className="text-emerald-600 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="outline-none w-full"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2">
              <Mail className="text-emerald-600 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="outline-none w-full"
                onChange={handleChange}
                required
              />
            </div>

            {type === "partner" && (
              <>
                <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2">
                  <Phone className="text-emerald-600 w-5 h-5" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="+212611223344"
                    className="outline-none w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2">
                  <Home className="text-emerald-600 w-5 h-5" />
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Store Name"
                    className="outline-none w-full"
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2">
              <Lock className="text-emerald-600 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="outline-none w-full"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2">
              <Lock className="text-emerald-600 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="outline-none w-full"
                onChange={handleChange}
                required
              />
            </div>

            <button className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow hover:shadow-lg">
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-600 font-semibold">
              Sign In
            </Link>
          </p>

          <button className="flex items-center justify-center gap-2 w-full mt-3 py-3 rounded-full border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-100 transition">
             Continue with Google
          </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Register;
