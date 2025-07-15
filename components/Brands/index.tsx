'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ImDiamonds } from "react-icons/im";
import CountUp from 'react-countup';

const StatsCounter = () => {
  const [triggerCountUp, setTriggerCountUp] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerCountUp(true);
        } else {
          setTriggerCountUp(false); // Reset to false if it leaves the viewport
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats = [
    { id: 1, end: 24, suffix: 'h', label: 'Support' },
    { id: 2, end: 27, suffix: '+', label: 'Downloads' },
    { id: 3, end: 15, suffix: '', label: 'Projects' },
    { id: 4, end: 3, suffix: 'k', label: 'Users' },
  ];

  return (
   <div className='flex flex-col  max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-y-6  text-white py-8 bg-[#2B0054] text-center'>
     <div ref={ref} className="flex  justify-around max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-y-6  text-white py-8 bg-[#2B0054] text-center">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <div className="flex items-center justify-center">
            <ImDiamonds className="text-xl mr-1" />
            <div className="text-4xl font-bold border-b border-body-color/[.15] pb-2 dark:border-white/[.15]">
              {triggerCountUp ? (
                <CountUp start={0} end={stat.end} duration={4.5} suffix={stat.suffix} />
              ) : (
                '0'
              )}
            </div>
          
          </div>
          <div className="text-sm mt-2 text-center">{stat.label.toUpperCase()}</div>
          
        </div>
        
      ))}
      

    </div>
    <div className='text-white text-center mt-10 flex-col gap-x-9 max-[768px]:px-4'>
        <h1 className='text-3xl font-bold'>Approach to Payment</h1>
        <p className='mt-4'>Lorem Ipsum estibulum blandit libero at mauris</p>
        </div>
   </div>
  );
};

export default StatsCounter;
