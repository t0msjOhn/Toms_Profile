import React, { useState } from 'react';
import {dp1} from '../assets/images'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-100 text-black p-4 mx-1 flex justify-between items-center rounded-sm">
      <div className="text-2xl font-bold flex flex-row h-10 gap-3"><img src={dp1}/>Toms John</div>
      <nav className="md:flex hidden space-x-4">
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="mailto:tomsjohnse@gmail.com" className="px-2 py-2  text-white bg-black rounded-md">Contact Me</a></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="bg-gray-100 md:hidden absolute top-16 left-0 w-full shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li><a href="#home" className="hover:underline" onClick={(prev)=>{
              setIsOpen(!prev)
            }}>Home</a></li>
            <li><a href="#about" className="hover:underline" onClick={(prev)=>{
              setIsOpen(!prev)
              }}>About</a></li>
            <li><a href="#projects" className="hover:underline" onClick={(prev)=>{
              setIsOpen(!prev)
              }}>Projects</a></li>
            <li><button className='bg-black rounded-md px-1 h-8' onClick={(prev)=>{
              setIsOpen(!prev)
              }}><a href="#contact" className="text-white">Contact Me</a></button></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
