import React from 'react'
import logo from '../assets/logo.png'
import Button from './Button'
const NavBar = () => {
  return (
    <div className='w-[937px] h-[155px] flex items-center space-x-10'>
        <img src={logo} alt="logo" className='w-[150px] h-[154px]' />
        <nav className='font-poppins hover:bg-black-500 font-semibold 
         font-size:16px  flex space-x-10 '>
            <a href="#" className='text-white drop-shadow-md '>HOME</a>
            <a href="#" className='text-white drop-shadow-md '>OBRAS</a>
            <a href="#" className='text-white drop-shadow-md '>SOBRE NÓS</a>
            <a href="#" className='text-white drop-shadow-md'>CONTATO</a>

        </nav>
        <Button/>
    </div>
  )
}

export default NavBar