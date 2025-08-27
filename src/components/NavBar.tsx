import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <nav
      className={`flex justify-between items-center p-4 fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md text-white shadow-lg' : 'text-black'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link to="/" className="logo w-10 h-10" aria-label="Brand logo">
          {/* SVG code for logo */}
        </Link>
        <span className="text-xl font-bold">My AI Editor</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`${scrolled ? 'text-white' : 'text-black'} hover:text-gray-400 transition-colors`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        {loading ? (
          <p className={`${scrolled ? 'text-white' : 'text-black'}`}>Loading...</p>
        ) : user ? (
          <>
            <div className="flex items-center space-x-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <p className={`${scrolled ? 'text-white' : 'text-black'}`}>
                Hello, {user.displayName}
              </p>
            </div>
            <Link to="/dashboard" className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`${scrolled ? 'text-white' : 'text-black'} md:hidden text-2xl`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg p-4 space-y-4 md:hidden animate-fadeIn">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 border-t pt-4">
            {user ? (
              <>
                <Link to="/dashboard" className="block px-4 py-2 rounded-full bg-blue-500 text-white text-center hover:bg-blue-600 transition">
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2 mt-2">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <p>Hello, {user.displayName}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block w-full px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}