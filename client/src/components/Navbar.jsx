import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X, Search } from 'lucide-react';
import { useClerk, UserButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-black/80 backdrop-blur-md text-white">

      {/* Logo */}
      <Link to="/" className="flex-1">
        <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      </Link>

      {/* Mobile Menu */}
      <div
        className={`fixed md:static top-0 left-0 h-screen md:h-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-8
        bg-black/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
        transition-all duration-300 overflow-hidden
        ${isOpen ? 'w-full' : 'w-0 md:w-auto'}`}
      >
        {/* Close icon */}
        <X
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        <Link onClick={() =>{scrollTo(0,0); setIsOpen(false)}} to="/">Home</Link>
        <Link onClick={() => {scrollTo(0,0);setIsOpen(false)}} to="/Movies">Movies</Link>
        <Link onClick={() => {scrollTo(0,0);setIsOpen(false)}} to="/Releases">Releases</Link>
        <Link onClick={() =>{scrollTo(0,0); setIsOpen(false)}} to="/Theaters">Theaters</Link>
        <Link onClick={() => {scrollTo(0,0);setIsOpen(false)}} to="/favourite">Favourite</Link>
        

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <Search className="w-6 h-6 cursor-pointer hidden md:block" />

        {/* LOGIN / USER */}
        {!user ? (
          <button
            onClick={() => openSignIn()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition duration-300"
          >
            Login
          </button>
        ) : (
          <div className="flex items-center gap-4">

            {/* My Bookings Button */}
            <button
              onClick={() => navigate('/my-bookings')}
              className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              🎟 My Bookings
            </button>

            {/* Clerk User Button */}
            <UserButton afterSignOutUrl="/" />
          </div>
        )}

        {/* Mobile Menu Icon */}
        <Menu
          className="w-8 h-8 cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        />
      </div>
      
    </div>
  );
};

export default Navbar;