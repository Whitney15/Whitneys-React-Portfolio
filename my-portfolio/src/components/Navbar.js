import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const links =[
    {
      id: 1,
      link: 'AboutMe'
    },
    {
      id: 2,
      link: 'Portfolio'
    },
    {
      id: 3,
      link: 'Resume'
    },
    {
      id: 4,
      link: 'Contact'
    },
  ]
  return (
    <div className='flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
     <img src={Logo}
     className='h-16'/>
     <ul className='flex'>

      {links.map(({ id, link })=> (
        <li key={id} className="p-4 cursor-pointer hover:text-lime-300 hover:scale-105 duration-200">{link}
        </li>
      ))}
        
       
     </ul> 
    </div>
  );
}

export default Navbar;