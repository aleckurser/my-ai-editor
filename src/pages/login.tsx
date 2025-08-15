import React, { useState } from 'react';
import type { NextPage } from 'next'; // Next.js භාවිතා කරනවා නම්

// React Router භාවිතා කරනවා නම්, මේ line එක ඉවත් කරන්න
// import { Link } from 'react-router-dom';

const Login: NextPage = () => { // Next.js භාවිතා කරනවා නම් 'NextPage' type එක භාවිතා කරන්න
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Default form submit එක නවත්වනවා

    // මෙතනින් තමයි login logic එක ලියන්න ඕනේ
    // උදාහරණයක් ලෙස, API එකකට දත්ත යැවීම
    console.log('Login attempt with:', { email, password });

    // Login සාර්ථක වුණාට පස්සේ, පරිශීලකයා වෙනත් පිටුවකට යොමු කරන්න පුළුවන්.
    // Next.js: useRouter().push('/dashboard');
    // React Router: navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleLogin}>
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
              <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;