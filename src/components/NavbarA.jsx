import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
        document.body.style.overflow = nav ? 'auto' : 'hidden'; // Prevent scrolling when the navbar is fullscreen
    };

    return (
        <nav
            className={`bg-slate-950 fixed w-full z-20 transition-all duration-500 ease-in-out
            ${nav ? 'h-screen md:pt-10' : 'h-20 md:top-10 md:left-1/2 md:h-fit md:transform md:-translate-x-1/2 md:w-3/4 md:rounded-lg'}`}>
            <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img className="h-10 w-10 mr-3" src={require("../assets/media/surgelogo.jpg")} alt="Surge Logo"/>
                    <span className="self-center text-3xl text-white font-semibold whitespace-nowrap">Surge</span>
                </a>

                <div className="flex md:order-2">
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-slate-100 focus:ring-2 focus:ring-slate-300 transition-all duration-400 ease-in-out"
                        onClick={handleClick}
                    >{!nav ? <Bars3Icon className="h-7 w-7" /> : <XMarkIcon className="h-5 w-5"></XMarkIcon>}
                    </button>
                </div>
            </div>
            <div className={`transition-all duration-500 ease-in-out text-6xl font-medium ${!nav ? 'hidden' : ''}`}>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                        (isActive ? "block py-2 pl-3 pr-4 text-amber-400 rounded" : "block py-2 pl-3 pr-4 text-white rounded hover:bg-slate-600")}
                        onClick={handleClick}
                        >Home</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => 
                        (isActive ? "block py-2 pl-3 pr-4 text-amber-400 rounded" : "block py-2 pl-3 pr-4 text-white rounded hover:bg-slate-600")}
                        onClick={handleClick}
                        >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apply" className={({ isActive }) => 
                        (isActive ? "block py-2 pl-3 pr-4 text-amber-400 rounded" : "block py-2 pl-3 pr-4 text-white rounded hover:bg-slate-600")}
                        onClick={handleClick}
                        >Apply</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => 
                        (isActive ? "block py-2 pl-3 pr-4 text-amber-400 rounded" : "block py-2 pl-3 pr-4 text-white rounded hover:bg-slate-600")}
                        onClick={handleClick}
                        >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sponsors" className={({ isActive }) => 
                        (isActive ? "block py-2 pl-3 pr-4 bg-gradient-to-r from-blue-500 from-0% via-purple-500 via-5% to-fuchsia-500 to-10% text-transparent bg-clip-text" 
                        : "block py-2 pl-3 pr-4 bg-gradient-to-r from-blue-700 from-0% via-purple-700 via-20% to-fuchsia-700 to-40% text-transparent bg-clip-text hover:from-blue-400 hover:via-purple-400 hover:to-fuchsia-400")}
                        onClick={handleClick}
                        >Sponsors</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 

export default Navbar;