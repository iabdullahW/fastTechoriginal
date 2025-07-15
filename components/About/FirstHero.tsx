"use client";
import React, { useEffect } from "react";
import Image from 'next/image'
import left1 from '../../public/images/about/left-1.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
function FirstHero() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <section className=" flex flex-row justify-between max-[768px]:flex-col items-center h-auto w-full gap-x-6 ">
      <div className="flex justify-center lg:justify-start overflow-hidden" data-aos="fade-up">
        <Image src={left1} alt="Hero image" className="h-auto w-full lg:w-[700px]" />
      </div>

      <div className="text-left lg:w-1/2 p-4" data-aos="fade-right">
        <h1 className="text-4xl font-bold text-black mb-4">Identity of Us</h1>
        <p className="text-lg text-black leading-relaxed">
          A renowned provider of IT services and solutions in Canada, Daka Inc was founded in 2003. We have a proven track record of completing projects and offering our services. We specialize in offering services in the areas of digital marketing and promotions, software and app development, power distribution with uninterrupted power supply solutions (UPS), fire detection and suppression systems, access control, security surveillance, IP camera monitoring, and IT networking solutions.
        </p>
      </div>
    </section>
  )
}

export default FirstHero