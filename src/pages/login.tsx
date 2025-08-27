import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      {/* Background Overlay with Gradients */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      {/* Main Login Form Container */}
      <div className="relative z-10 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Sign in to your account
        </p>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-4">
          <button
            className="w-full p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button
            className="w-full p-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition flex items-center justify-center space-x-2 transform hover:scale-105"
            onClick={signInWithGoogle}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.743 12.203c0-.623-.054-1.226-.15-1.812H12v3.428h6.474c-.279 1.455-1.111 2.684-2.454 3.535v2.245h2.89c1.696-1.558 2.678-3.864 2.678-6.196z" />
              <path d="M12 24c3.238 0 5.955-1.072 7.94-2.909l-2.89-2.245c-1.218.82-2.756 1.306-4.996 1.306-3.858 0-7.143-2.607-8.336-6.106H.735v2.327A11.996 11.996 0 0012 24z" />
              <path d="M3.664 14.192c-.22-.656-.346-1.349-.346-2.064s.126-1.408.346-2.064V7.801H.735A12.002 12.002 0 000 12c0 1.453.279 2.85.735 4.192l2.929-2.064z" />
              <path d="M12 4.706c2.091 0 3.948.718 5.394 2.053l2.57-2.57C17.955 1.708 15.238 0 12 0 8.762 0 6.045 1.708 4.06 4.693l2.929 2.064C7.857 5.293 10.142 4.706 12 4.706z" />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>

        {/* Links to other pages */}
        <div className="flex justify-between items-center text-sm mt-6 text-center">
          <Link to="/reset" className="text-blue-400 hover:underline transition">
            Forgot Password?
          </Link>
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline transition">
              Register
            </Link>
            {" "}now.
          </p>
        </div>
      </div>
    </div>
  );
}