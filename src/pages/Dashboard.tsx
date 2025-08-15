// src/pages/Dashboard.tsx

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p>Loading user data...</p>
      </div>
    );
  }

  if (!user) {
    // user log වෙලා නැත්නම් login පිටුවට යොමු කරන්න
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold">Welcome, {user.displayName}!</h2>
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mt-4"
          />
        )}
        <p className="mt-4">Email: {user.email}</p>
        <p className="mt-2 text-gray-500">User ID: {user.uid}</p>
      </div>
    </div>
  );
};

export default Dashboard;