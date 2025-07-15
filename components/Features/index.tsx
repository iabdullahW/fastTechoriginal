"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { featureData } from "@/utils/data";
import "./style.css";

const Features = () => {
  const { topContent, sections, cards } = featureData;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="feat" className="flex flex-col items-center bg-[#F8E4EB] p-8 mt-[1rem] h-[70rem]">
      <div  id="feat-1" className=" flex-1  flex flex-row items-center mb-8 md:mb-0 gap-x-4">
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <Image
            src={topContent.topContentImg.src}
            alt={topContent.topContentImg.alt}
            width={topContent.topContentImg.width}
            height={topContent.topContentImg.height}
          />
        </div>
        <div className="flex-1 text-left mb-8">
          <h6 className="text-sm font-medium text-[#351A5F] uppercase">{topContent.head}</h6>
          <h2 className="text-4xl font-bold text-[#351A5F] mb-4">
            {topContent.heading}
          </h2>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`section-header ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-xl font-semibold text-[#351A5F]">
                    {section.title}
                  </h3>
                  {activeIndex === index ? (
                    <IoIosArrowUp className="w-5 h-5 text-[#351A5F]" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-[#351A5F]" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="text-[#351A5F] mt-2">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
   
     {/* Glassmorphism Cards Section */}
<div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[9rem]">
  {cards.map((card, index) => (
    <div
      key={index}
      className="glass-card rounded-xl flex flex-col items-center text-center bg-[#FBEFF3] opacity-80 border border-slate-300 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-3"
    >
      <Image
        src={card.icon.src}
        alt={card.icon.alt}
        width={card.icon.width}
        height={card.icon.height}
      />
      <h4 className="text-lg font-bold text-[#351A5F] mt-4">{card.title}</h4>
      <ul className="text-[#351A5F] mt-2 space-y-2 text-left">
        {card.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

    </div>
  );
};

export default Features;
