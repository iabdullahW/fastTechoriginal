import React from 'react';
import FirstHero from '@/components/About/FirstHero';
import SecondHero from '@/components/About/SecondHero';
import ThirdHero from '@/components/About/ThirdHero';
import FourthHero from '@/components/About/FourthHero';
const Page = () => {
  return (
    <div className="overflow-x-hidden bg-white text-black"> 
      <FirstHero />
      <SecondHero />
      <ThirdHero/>
      <FourthHero/>
    </div>
  );
}

export default Page;