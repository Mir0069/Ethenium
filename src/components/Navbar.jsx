import { nav } from 'motion/react-client';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#1b1b1b] initial right-0 left-0 sticky top-0'>
      
      <div className=" sm:flex space-x-6 p-6 justify-center text-white bg-[#1b1b1b]">
          <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                  ? 'text-black bg-[#feffff] rounded-3xl  px-3 py-2 text-md font-medium'
                  : 'text-gray-300 hover:text-[#94743b] px-3 py-2 text-md font-medium'
              } >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive
                  ? 'text-black bg-[#feffff] rounded-3xl  px-3 py-2 text-md font-medium'
                  : 'text-gray-300 hover:text-[#94743b] px-3 py-2 text-md font-medium'
              } >
            About
          </NavLink>
        </div>

    </nav>
  )
}

export default Navbar
