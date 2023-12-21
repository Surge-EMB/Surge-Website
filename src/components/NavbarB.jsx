import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavbarB = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? 'auto' : 'hidden'; // Prevent scrolling when the navbar is fullscreen
  };

  return (
    <nav className="bg-slate-900 fixed w-full z-20">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-3xl text-white font-semibold whitespace-nowrap">Surge</span>
        </a>
        <button
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-slate-100 focus:ring-2 focus:ring-slate-300 transition-all duration-300 ease-in-out"
          onClick={handleClick}
        >
          {!nav ? <Bars3Icon className="h-5 w-5" /> : <XMarkIcon className="h-5 w-5"></XMarkIcon>}
        </button>
        <ul className={`${
          nav ? 'flex' : 'hidden'
        } absolute flex-col items-center justify-center w-full h-full inset-0 bg-slate-900 md:flex md:flex-row md:static md:bg-transparent`}>
          <li className="my-2 md:my-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'block py-2 pl-3 pr-4 text-white bg-indigo-500 rounded'
                  : 'block py-2 pl-3 pr-4 text-slate-300 rounded hover:bg-slate-700 hover:text-white'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
                <NavLink to="/programs" className={({ isActive }) => 
                (isActive ? "block py-2 pl-3 pr-4 text-white bg-indigo-500 rounded" : "block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-300")}
                >Programs</NavLink>
            </li>
            <li>
                <NavLink to="/apply" className={({ isActive }) => 
                (isActive ? "block py-2 pl-3 pr-4 text-white bg-indigo-500 rounded" : "block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-300")}
                >Apply</NavLink>
            </li>
            <li>
                <NavLink to="/scholars" className={({ isActive }) => 
                (isActive ? "block py-2 pl-3 pr-4 text-white bg-indigo-500 rounded" : "block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-300")}
                >Scholars</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => 
                (isActive ? "block py-2 pl-3 pr-4 text-white bg-indigo-500 rounded" : "block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-300")}
                >Contact</NavLink>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarB;


