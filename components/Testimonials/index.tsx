import React from 'react';
import Image from 'next/image';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import nine from "../../public/images/testimonials/number-nine.png";

function Index() {
  return (
    <section className='bg-[#2B0054] w-full h-full py-16 flex items-center justify-center px-4'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left Section */}
        <div className="col-span-1 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Introducing an Exclusive New Line of Products at Becca Platform
          </h1>
          <div className="flex flex-row max-[768px]:flex-col lg:items-center mt-4">
            <button className="bg-[#7F2EF8] hover:shadow-lg hover:shadow-[#7F2EF8]/60 transition-all text-white px-6 py-4 rounded-md mb-4 lg:mb-0 lg:mr-6">
              Learn more
            </button>
            <a href="#" className="text-white inline-flex items-center">
              Contact us <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="col-span-1 space-y-6">
          <div className="text-white flex justify-between">
            <span>Find How to Backup Your NFTs</span>
            <span className="bg-[#7F2EF8] hover:bg-[#2c164d] transition-all text-xs text-white px-2 py-1 rounded-full">RESOURCES</span>
          </div>
          <hr className="border-t border-purple-500"/>
          <div className="text-white flex justify-between">
            <span>Join 300M Active Becca Accounts</span>
            <span className="bg-[#7F2EF8] hover:bg-[#2c164d] transition-all text-xs text-white px-2 py-1 rounded-full">RESOURCES</span>
          </div>
          <hr className="border-t border-purple-500"/>
          <div className="text-white flex justify-between">
            <span>Install New Widgets for Your Shop</span>
            <span className="bg-[#7F2EF8] hover:bg-[#2c164d] transition-all text-xs text-white px-2 py-1 rounded-full">RESOURCES</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 bg-[#3D1B75] rounded-lg py-14 text-center relative">
          <div className="absolute top-4 right-8">
            <Image src={nine} alt="Number nine" width={40} height={40}/>
          </div>
          <h2 className="text-white text-start px-2 font-bold text-xl mb-2">Verified</h2>
          <div className="flex items-start mb-2 px-2">
            <TiStarFullOutline size={20}/>
            <TiStarFullOutline size={20}/>
            <TiStarFullOutline size={20}/>
            <TiStarFullOutline size={20}/>
            <TiStarHalfOutline size={20}/>
          </div>
          <p className="text-white mt-6">4.8 rating on the AppStore</p>
        </div>
      </div>
    </section>
  );
}

export default Index;
