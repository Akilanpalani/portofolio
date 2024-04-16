import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa';

export const HomePage = () => {
  return (
    <>
      <div className='text-3xl flex flex-col md:flex-row justify-around items-center mt-10'>
        <div className='text-white mx-10 font-serif flex-col-1'>
          <p className='font-serif'>
            Hello I'm <br />
            <span className='text-4xl md:text-8xl font-serif'>AKILAN</span>
          </p>
          <p className='text-xl mt-4'>Full Stack Developer</p>
          <p className='text-sm md:text-xl mt-5'>
            I am a full stack developer with 1 year of experience.
          </p>
          {/* Buttons */}
          <div className='mt-5 flex flex-row'>
            <button className='bg-white text-black p-1 rounded-full text-sm text-center flex items-center'>
              Get Resume
              <span className='ml-2'>
                <FaDownload size={15} />
              </span>
            </button>
            <button className='bg-white text-black p-1 rounded-full text-sm ml-5 text-center flex items-center'>
              About Me
              <span className='ml-2'>
                <MdArrowForward size={20} transform='rotate(180deg)' />
              </span>
            </button>
          </div>
        </div>
        <div className='mt-10 md:mt-0 mx-10'>
          <img
            alt='logo'
            src='https://placeholder.pics/svg/300'
            className='w-80 md:w-96'
          />
        </div>
      </div>
    </>
  );
};
