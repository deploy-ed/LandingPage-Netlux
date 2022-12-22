import React from 'react'
import logo from '../assets/logo.png'
const NavBar = () => {
  return (
    <nav className='bg w-full flex justify-beetwen items-center  '>
      <img src={logo} alt="logo" className='w-[150px] h-[155px]' />
    </nav>
  )
}

export default NavBar