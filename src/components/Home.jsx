import React from 'react'
import {Link} from 'react-scroll'

function Home() {
  return (
    <section className="bg-[url('./src/assets/images/Energia-Solar.png')] bg-cover bg-no-repeat h-screen flex">
        <div className='text-center items-center justify-center align-middle m-auto'>
            <div>
              <h1 className="text-6xl font-bold text-white">Excelencia e qualidade</h1>
              <h1>
                <span className="text-6xl font-bold text-white">em </span>
                <span className="text-6xl font-bold text-yellow-400">Energia Solar</span>
              </h1>
              <h1 className="text-6xl font-bold text-white">para você</h1>
              <br/>
              <br/>
              <br/>
            </div>
            <div className='items-center justify-center align-middle m-auto'>
              <Link to='' smooth duration={500} className='group text-white w-fit px-6 py-3 flex items-center rounded-md bg-orange-500 bg-opacity-80 cursor-pointer'>
                  Quero saber mais  &nbsp;
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Home