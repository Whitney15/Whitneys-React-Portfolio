import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/logo.png';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'contact',
    },
    {
      id: 5,
      link: 'resume',
    },
  ];

  return (
    <div className='flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <img src={Logo} className='h-16' />

      <ul className='flex'>
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className='p-4 cursor-pointer hover:text-lime-300 hover:scale-105 duration-200'
            onClick={toggleNav} // Close the menu when a navigation link is clicked
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;