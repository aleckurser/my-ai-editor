import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // firebase object එක import කරන්න

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const [user, loading] = useAuthState(auth); // user ගේ තොරතුරු ලබා ගන්න

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav
      className={`flex justify-between items-center p-4 fixed top-0 w-full z-50 shadow-lg animate-fadeIn transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-white/10 backdrop-blur-md'
      } ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <a className={`logo block w-10 h-10 ${scrolled ? 'text-white' : 'text-black'}`} aria-label="Brand logo">
            {/* SVG code for logo */}
          </a>
        </Link>
        <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-black'}`}>My AI Editor</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="#features" className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>
          Features
        </Link>
        <Link to="#pricing" className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>
          Pricing
        </Link>
        <Link to="#about" className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>
          About
        </Link>
        <Link to="#other services" className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>
        Other services
        </Link>
      </div>

      {/* Desktop Actions (Login/User details) */}
      <div className="hidden md:flex space-x-4">
        {loading ? (
          <p className="text-white">Loading...</p>
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
          {user ? (
            <>
              <div className="flex items-center space-x-2">
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
                className="block px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">Login</Link>
          )}
        </div>
      )}

      {/* minimal CSS for hover spin & reduced motion */}
      <style jsx>{`
        .logo svg { transition: transform .3s ease; }
        .logo:hover svg { animation: spin 6s linear infinite; }
        @keyframes spin { from { transform: rotate(0) } to { transform: rotate(360deg) } }
        @media (prefers-reduced-motion: reduce) {
          .logo:hover svg { animation: none !important; }
        }
      `}</style>
    </nav>
  );
}