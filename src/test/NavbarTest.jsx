import React from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline' 

const NavbarTest = () => {
  
  return (
    <nav className='w-screen h-[80px] z-10 bg-white fixed'>

      {/* dont use spaces in calc - last term does not work right now dont worry about it*/}
      <div className='px-2 flex justify-between items-center h-full mx-4 lg:mx-[calc(1rem+(3vw*(10vw/769px)))]'>
        <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>HSF</h1>
        {/* hidden but flex when med or bigger, centered respective to page */}
        <div className='hidden md:flex items-center space-x-3 self-center font-medium'>
          <a className='hover:text-indigo-600' href='#'>Home</a>
          <a className='hover:text-indigo-600' href='#About'>About</a>
          <a className='hover:text-indigo-600' href='#Apply'>Apply</a>
          <a className='hover:text-indigo-600' href='#AspiringScholars'>Scholars</a>
          <a className='hover:text-indigo-600' href='#Contact'>Contact</a>
        </div>
        <div className='hidden md:flex font-medium'>
          <button className='border-none bg-transparent text-indigo-600 hover:text-black px-8 py-3'>Sign In</button>
          <button className='border-2 rounded-lg bg-indigo-600 text-white hover:text-black px-8 py-3'>Apply</button>
        </div>
      </div>

      <div className='md:hidden'>
        <Bars3Icon className="h-5 w-5" />
      </div>

      <div className='absolute flex flex-col md:hidden font-medium'>
        <a className='w-full hover:text-indigo-600' href='#Home'>Home</a>
        <a className='w-full hover:text-indigo-600' href='#Apply'>Apply</a>
        <a className='w-full hover:text-indigo-600' href='#AspiringScholars'>Aspiring Scholars</a>
        <a className='w-full hover:text-indigo-600' href='#Sponsors'>Sponsors</a>
        <a className='w-full hover:text-indigo-600' href='#Contact'>Contact</a>
      </div>
    </nav>
  )
} 

export default NavbarTest;