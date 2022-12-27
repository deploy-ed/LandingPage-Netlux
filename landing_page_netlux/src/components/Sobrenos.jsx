import React from 'react'
import video from '../assets/video.mp4'
import missao from '../assets/missao.png'
import Comotrab from './Comotrab'
import CTA from './CTA'
const Sobrenos = () => {
  return (
    <section className='h-[1500px]  bg-[#DCDEE2] flex flex-col'>
        <div className='h-[350px] w-[1300px] flex flex-row '>
            <div className='flex flex-col'>
                    <div className='h-[154px] w-[501px] ml-28 mt-20 '>
                        <h1 className='font-Poppins text-black font-semibold  text-5xl leading-20'> Conheça um pouco da nossa história </h1>
                    </div>
                    <div className='h-[175px] w-[638px] ml-28 mt-2'>
                        <p className='font-poppins text-black font-medium text-xl  leading-8 '> 
                        A Netlux Solar é uma empresa subsidiária do
                        grupo Netlux  especializada em implantação de
                        sistemas de geração de  energia Solar. Oferecemos 
                        soluções completas, para que  nossos clientes
                        possam gerar sua própria energia e reduzir  os seus
                        custos, e assim, investir em outros sonhos.</p>
                    </div>     
            </div>
                <div className='mt-28 ml-24'>
                    <video className="w-full rounded-3xl" controls>
                        <source src={video} type="video/mp4"/>
                     </video>
                </div>
        </div>
        <div className='flex flex-col'>
                   
                        <h1 className='font-Poppins text-black font-semibold text-5xl leading-20 mb-10 mt-20 ml-28'> Nossa missão</h1>
                    
                    <div className='flex flex-row '>
                        <div>
                        <img src={missao} alt="image" className='ml-20 h-[109px] w-[200px]'/>
                        </div>
                        <div className='h-[150px] w-[442px]'>
                        <p className='font-poppins text-black font-medium text-xl leading-8 '> 
                        Fornecer serviços e soluções integradas com o mais alto padrão
                        de qualidade, visando atender e superar as expectativas dos
                        clientes e sociedade.</p>
                        </div>
                         
                    </div>     
            </div>
                
                <Comotrab/>
                <div className='mt-20 ml-8'>
                <CTA/>
                </div>
            
    </section>
  )
}

export default Sobrenos