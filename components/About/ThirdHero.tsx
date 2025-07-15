"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import left2 from '../../public/images/about/left-2.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
function ThirdHero() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);
  return (
    <div className=' flex flex-row justify-between max-[768px]:flex-col  items-center h-auto w-full gap-x-6 '>
      <div className='flex justify-center lg:justify-start overflow-hidden' >
        <Image src={left2} alt='Hero image' className='h-auto w-full lg:w-[700px] ' data-aos="fade-up"/>
      </div>

      <div className='text-left lg:w-1/2 p-4'>
        <h1 className='text-4xl font-bold text-black mb-4 '  data-aos="fade-right">Our Goal</h1>
        <p className='text-lg text-black leading-relaxed'  data-aos="fade-left">
        Through efficient administration and a group of committed experts, to developed into a dynamic, inventive, and creative industry leader and offer top-notch services
        </p>
      </div>
    </div>
  )
}

export default ThirdHero
