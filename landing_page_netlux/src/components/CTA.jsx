import React from 'react'
import ButtonCt from './ButtonCt'

const CTA = () => {
  return (
    <section className='flex items-center sm:flex-row flex-col 
    bg-black rounded-3xl w-[1250px] h-[180px] p-10 '>
        <div className='flex-1 flex flex-col text-left  '>
        <h1 className='text-white text-2xl font-poppins font-semibold'>QUER SABER MAIS SOBRE ENERGIA SOLAR ? </h1>
        <p className='text-white text-xl font-poppins font-semibold'>Fale com a gente no WhatsApp</p>
        
        </div>
        <div className='flex items-center '><ButtonCt/>
        </div>
    </section>
  )
}

export default CTA