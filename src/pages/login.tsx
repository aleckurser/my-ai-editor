import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../firebase'; // firebase.ts ෆයිල් එකෙන් auth සහ googleProvider import කරගන්න

const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }
  
  if (user) {
    // පරිශීලකයා log වී ඇත්නම්, homepage එකට යොමු කරන්න
    // මෙහිදී ඔබ React Router භාවිතා කරන්නේ නම්, navigate('/dashboard') වැනි දෙයක් භාවිතා කළ හැක.
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold">Logged in as: {user.displayName}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <p className="text-center text-gray-600 mb-4">
          Login using your Google Account
        </p>
        <button
          onClick={() => signInWithGoogle()}
          className="w-full flex items-center justify-center px-6 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M44.5 20H24v8.5h11.2c-.8 5.7-5.5 8.7-11.2 8.7-6.6 0-12-5.4-12-12s5.4-12 12-12c3.4 0 6.4 1.4 8.7 3.5l6.4-6.2C38.4 4.5 31.8 1 24 1 12.3 1 2 10.3 2 22s10.3 21 22 21c11.7 0 20.4-8.7 20.4-21 0-1.4-.2-2.8-.4-4.2z"/>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;