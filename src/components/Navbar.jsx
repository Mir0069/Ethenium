import { nav } from 'motion/react-client';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' sticky initial right-0 justify-center left-0   top-0'>
      {/* <div className='absolute w-[100%] blur-xl bg-white'>hello</div> */}
      <div className=" absolute sm:flex space-x-6 p-6 justify-center text-white bg-transparent mx-auto w-[100%]">
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
