import React from 'react'
import dim from '../assets/dim.png'
import inst from '../assets/inst.png'
import acessoria from '../assets/acessoria.png'
import monit from '../assets/monit.png'
import seta from '../assets/seta.png'
const Comotrab = () => {
  return (
    <section>

        <div className='flex items-left flex-col'>
            <h1 className='flex text-left font-poppins font-semibold text-5xl text-black mt-12 ml-28 mb-10'>Como trabalhamos </h1>
           
            <div className='flex flex-row items-center '>
                
                <div className='flex flex-col items-center'>
                <img src={dim} alt="dim" className='w-[180px] h-[101px] mx-20' />
                <p className='font-poppins font-semibold  text-black  my-3'>
                Dimensionamento</p>
                </div>

                <img src={seta} alt="seta" className='w-[50px] h-[50px] my-10 ' />
               
                <div className='flex flex-col items-center'>
                <img src={acessoria} alt="acessoria" className='w-[180px] h-[101px] mx-20' />
                <p className='font-poppins font-semibold  text-black  my-3'>
                Assessoria junto a Concessionária</p>
                </div>

                <img src={seta} alt="seta" className='w-[50px] h-[50px] my-10' />

                <div className='flex flex-col items-center'>
                <img src={inst} alt="instalação" className='w-[180px] h-[101px] mx-20' />
                <p className='font-poppins font-semibold  text-black  my-3'>
                Instalação do Sistema</p>
                </div>
            
                <img src={seta} alt="seta" className='w-[50px] h-[50px] my-10' />
                
                <div className='flex flex-col items-center'>
                <img src={monit} alt="monitoramento" className='w-[180px] h-[101px] mx-20' />
                <p className='font-poppins font-semibold  text-black  my-3'>
                Monitoramento do Sistema</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Comotrab