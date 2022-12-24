import React from 'react'

const Stats = () => {
  return (
    <section className='flex items-center  '>
       
       <div className='flex-1 flex justify-start items-center flex-row m-3 w-[1109px] h-[92px]'>
       
       <div className='flex flex-col'>
        <h4 className='font-poppins font-semibold xs:text-[40.89] text-[30.89px] 
        xs:leading-[43.16] text-orange-500 my-2'>+ 500 kWp</h4>
        <p className='font-poppins font-normal xs:text-[20.45px] text-[15.45px] 
        xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3'>INSTALADOS</p>
        </div>

        <div className='flex flex-col '>
        <h4 className='font-poppins font-semibold xs:text-[40.89] text-[30.89px] 
        xs:leading-[43.16] text-orange-500 my-2'>+ R$ 1.000.000,00</h4>
        <p className='font-poppins font-normal xs:text-[20.45px] text-[15.45px] 
        xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3'>economizado para nossos clientes</p>
        </div>
        <div className='flex flex-col '>
        <h4 className='font-poppins font-semibold xs:text-[40.89] text-[30.89px] 
        xs:leading-[43.16] text-orange-500 my-2'>+ 150 Clientes</h4>
        <p className='font-poppins font-normal xs:text-[20.45px] text-[15.45px] 
        xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3'>SATISFEITOS</p>
       </div>
       
       </div>
            
        

        

        
        

     
       
    </section>
  )
}

export default Stats