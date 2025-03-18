import React from 'react';
import { appleImg, searchImg, bagImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full max-w-screen-xl mx-auto">
        {/* Apple Logo */}
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {/* Navigation Links */}
        <div className="flex flex-1 justify-center hidden sm:flex">
          {navLists.map((nav) => (
            <div 
              key={nav} 
              className="px-5 text-sm cursor-pointer hover:text-white text-gray transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-center  max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} className="cursor-pointer" />
          <img src={bagImg} alt="Bag" width={18} height={18} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
