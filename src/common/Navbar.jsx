import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className='max-w-full flex justify-between items-center p-5 z-20 shadow-2xl text-white'>
        <h1 className='font-serif text-sm md:text-2xl'>It's Coding Time</h1>

        <div className='md:hidden text-[18px] cursor-pointer'>
          <button
            onClick={toggleMenu}
            className='text-sm lg:text-3xl items-center'
          >
            {showMenu ? (
              <MdClose size={24} transform='rotate(180deg)' />
            ) : (
              <MdMenu size={24} transform='rotate(180deg)' />
            )}
          </button>
          {showMenu && (
            <div className='md:hidden absolute top-14 left-0 w-full bg-white z-10'>
              <ul className='flex flex-col items-center justify-center gap-5 py-10 text-sm md:text-2xl text-black'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          )}
        </div>
        {!showMenu && (
          <div className='hidden md:flex gap-8'>
            <ul className='flex flex-row items-center justify-center gap-5 text-white'>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
