import React from 'react'
import Grocery from '../../assets/Grocery Website Assets/grocery.png'
import Button from "../Button/Button";

function Hero() {
  return (
    <section>
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col item-center md:pt-25 p-25'>
        {/* Hero Content */}
        <div className='flex-1'>
          <span className='bg-orange-200 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
          <h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold '>
              Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br/> In You City
          </h1>
          <p className='text-zinc-600 md:text-zinc-lg text-md max-w-[530px] mt-5 mb-10'>
            Bred for a high content of beneficial substance. Our Products are
            all fresh and healthy.
          </p>
          <Button content=""/>
        </div>
        {/* Hero Image */}
        <div className='flex-1'>
          <img src={Grocery} alt="Hero Image"/>
        </div>
        </div>
    </section>
  )
}

export default Hero