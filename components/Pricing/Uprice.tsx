'use client';
import React, { useEffect } from "react";
import Image from 'next/image';
import left from "../../public/images/Pricing/left.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Uprice() {
  useEffect(() => {
    Aos.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className='py-16 flex items-center justify-center flex-col px-4 lg:px-0'>
      <div className="container mx-auto flex flex-row max-[768px]:flex-col items-center lg:space-x-8">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start" data-aos='fade-out'>
          <Image src={left} alt="Left image" className="w-[18rem] md:w-[24rem] lg:w-[28rem]" />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4">
          <p className="text-[#7F2EF8] text-sm font-medium tracking-wide mb-2">WORK WITH</p>
          <h2 className="text-[#3D1B75] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The all-in-one pack strategy platform for creators
          </h2>
          <p className="text-[#3D1B75] mb-6">
            Lorem Ipsum estibulum blandit libero at mauris condi me ntum males uada scelerisque in mauris ut malda.
          </p>
          <a href="#" className="text-[#7F2EF8] font-semibold inline-flex items-center">
            Start using Becca at ICloud.com <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Uprice;
