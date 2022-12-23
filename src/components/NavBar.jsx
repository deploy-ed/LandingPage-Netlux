import React from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-scroll'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-transparent fixed'>
      <div>
        <img src={logo} alt="logo" className='w-[150px] h-[155px]' />
      </div>
      <ul className='hidden md:flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to='' smooth duration={500}>
            Inicio
          </Link>
          <Link to='' smooth duration={500}>
            Obras
          </Link>
          <Link to='' smooth duration={500}>
            Sobre Nós
          </Link>
          <Link to='' smooth duration={500}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar