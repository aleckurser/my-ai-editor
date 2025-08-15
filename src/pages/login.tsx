import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom'; // React Router ගෙන් navigate import කරගන්න

const LoginPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, , , ] = useSignInWithGoogle(auth);
  const navigate = useNavigate(); // navigate hook එක භාවිතා කරන්න

  useEffect(() => {
    if (user) {
      // User log වුණාට පස්සේ redirect කරන්න
      navigate('/'); // homepage එකට redirect කිරීම
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold">Loading...</div>
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
          onClick={() => signInWithGoogle('redirect')} // redirect option එක භාවිතා කරන්න
          className="w-full flex items-center justify-center px-6 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-700 transition-colors"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;