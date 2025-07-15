'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import TextAnimation from "./TypeAnimation";
import { MdWavingHand } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { heroData } from "@/utils/data";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Index() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);


  const { topContent, bottomCard } = heroData;

  return (
    <div className="mx-auto mt-[2rem] flex w-[90%] flex-col px-1 md:px-12 lg:px-24">
      {/* Top content */}
      <div className="flex flex-row  items-center " id="top">
        {/* Left */}
        <div className="flex flex-col items-start justify-between gap-y-8 md:w-1/2">
          <div className="flex  w-full items-center rounded-lg bg-white  p-1 shadow-lg md:max-w-sm " data-aos='fade-left'>
            <MdWavingHand className="mr-2 text-2xl text-[#FFC83D]" />
            <h1 className="w-full  text-sm font-bold text-[#91919B] md:text-base">
              {topContent.heading}
            </h1>
            <FaLongArrowAltRight className="mr-2 transform cursor-pointer text-xl text-[#7F2EF8] transition-transform hover:translate-x-1" />
          </div>
          <div className="text-container text-container text-3xl font-medium leading-tight tracking-tighter md:max-w-sm md:text-5xl md:leading-[4rem]" data-aos='fade-right' >
            <TextAnimation />
          </div>
          <div className="mt-8 flex flex-col items-center justify-center " data-aos='fade-down' >
            <h1 className="mb-4 text-base font-medium text-black md:text-xl">
              {topContent.trust}
            </h1>
            <div className="flex gap-x-4">
              {topContent.logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Team Logo ${index + 1}`}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="chair relative mb-[] mt-4 w-[] md:mt-0  md:w-1/2 " data-aos='fade-up' data-aos-easing='linear' >
          <Image
            src={topContent.heroImage.src}
            width={topContent.heroImage.width}
            height={topContent.heroImage.height}
            alt={topContent.heroImage.alt}
            className=" hero-image absolute top-[-250px]"
          />
          <Image
            src={topContent.heroClock.src}
            width={topContent.heroClock.width}
            height={topContent.heroClock.height}
            alt={topContent.heroClock.alt}
            className="absolute right-20 max-[768px]:hidden"
          />

          <video
            width={topContent.heroVid.width}
            height={topContent.heroVid.height}
            controls
            autoPlay
            loop 
            className="absolute top-[-139px] right-32 max-[768px]:hidden"
          >
            <source src={topContent.heroVid.src} type="video/mp4" />
            <track src={topContent.heroVid.src} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* bottom card */}
      <div className="card-container ">
        <div>
          <h1 className="mb-9 text-center text-3xl font-semibold text-[#351A5F] lg:text-3xl">
            {bottomCard.title}
          </h1>
        </div>
        <div
          className="mb-5 flex w-full flex-row items-center justify-between gap-2"
          id="inps"
        >
          <input
            type="text"
            placeholder="User Name"
            className="rounded-md bg-white p-2 py-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-md bg-white p-2 py-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-md bg-white p-2 py-4"
          />
          <button className="w-[8rem] rounded-md bg-gradient-to-b from-[#942FF3] to-[#8138F8] p-3 text-white shadow-lg">
            Sign Up
          </button>
        </div>
        <div>
          <p className="text-center text-black">{bottomCard.footerText}</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
