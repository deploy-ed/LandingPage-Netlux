import React from 'react'
import Footer from './Footer'
const Contato = () => {
  return (
    <section className='h-[1500px] tw-background-footer '>
            <div className='flex flex-col items-center'>
                <div>
            <h1 className='font-Poppins text-black font-semibold text-5xl leading-20'> Quer qualidade e experiência no seu projeto? </h1>
                
                </div>
                <div className='w-[1110px] h-[80px] text-center mt-2'>
                <p className='font-poppins text-black font-medium text-xl  leading-8 '>Preencha o formulário abaixo que 
                entraremos em contato em até 24 horas para conversarmos sobre a simulação do seu orçamento e solucionar 
                quaisquer dúvidas sobre o seu projeto.</p>
                </div>
                <div>

                </div>
            </div>

            <div className='w-[1110px] h-[391px] mt-20 mx-28 '>
               <div className='grid grid-cols-2 gap-4 content-start my-8'>
                <div className='h-[63px] w-[543px] border-2 border-gray-800 bg-gray-300 '>

                </div >
                <div className='h-[63px] w-[543px] border-2 border-gray-800 bg-gray-300'>

                </div>
                <div className='h-[63px] w-[543px] border-2 border-gray-800 bg-gray-300'>

                </div>
                <div className='h-[63px] w-[543px] border-2 border-gray-800 bg-gray-300'>

                </div>
                </div>
                <div className='w-[1105px] h-[233px] border-2 border-gray-800 bg-gray-300'>

                </div>
            </div>
            <Footer/>
    </section>
  )
}

export default Contato