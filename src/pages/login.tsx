// src/pages/LoginPage.tsx

import React, { useState, useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'; // Email/Password සඳහා අවශ්‍ය Firebase functions
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Login mode එක ද, නැත්නම් Sign-up mode එක ද කියලා බලන්න
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // User log වුණාට පස්සේ homepage එකට redirect කරන්න
      navigate('/');
    }
  }, [user, navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Log in to an existing account
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Create a new account
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) {
      console.error('Authentication Error:', error.message);
      alert(error.message); // Error එක alert එකකින් පෙන්වන්න
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg max-w-sm w-full">
        <h3 className="text-2xl font-bold text-center">
          {isLogin ? 'Login to your account' : 'Create an account'}
        </h3>
        
        {/* Email/Password Form */}
        <form onSubmit={handleAuth}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input 
                type="password" 
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-between mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </div>
        </form>
        
        {/* Google Login Button */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 mb-2">or</p>
          <button
            onClick={() => signInWithGoogle()}
            className="w-full flex items-center justify-center px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700 transition-colors"
          >
            {/* SVG icon */}
            Login with Google
          </button>
        </div>

        {/* Toggle between Login and Sign Up */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:underline"
          >
            {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;