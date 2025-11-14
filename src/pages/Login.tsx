import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Lock,  } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center bg-gradient-to-b  from-emerald-50 to-white px-4 py-2">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl   border border-emerald-200 ">
          <div className="scale-75">

          <h1 className="text-3xl font-bold text-emerald-700 text-center mb-6">
            Sign In
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-300 transition">
              <Mail className="text-emerald-600 w-5 h-5" />
              <input
                type="email"
                placeholder="Email address"
                className="outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-300 transition">
              <Lock className="text-emerald-600 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow hover:shadow-lg">
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-emerald-600 font-semibold">
              Sign Up
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

export default Login;
