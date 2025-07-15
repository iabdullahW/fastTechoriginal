"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaStarSolid } from 'react-icons/lia';
import "./style.css";

export default function CustomCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className=" text-[#8B33F5] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] overflow-x-hidden h-[19rem] mx-auto">
      <Slider {...settings}>
        {[{
          review: "Mauris condimentum scelerisque in scelerisque in mauris. Lorem Ipsum estibulum blandit libero at.",
          author: "Dolores Smith",
          role: "3D Artist at Becca",
        }, {
          review: "Another sample review text goes here. Customize this as needed.",
          author: "John Doe",
          role: "Product Manager at Becca",
        }, {
          review: "One more sample review for the carousel component.",
          author: "Jane Roe",
          role: "Lead Designer at Becca",
        }].map(({ review, author, role }, idx) => (
          <div key={idx} className="p-6 text-center">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, starIdx) => (
                <LiaStarSolid key={starIdx} className="text-[#351A5F]" />
              ))}
            </div>
            <p className="text-lg md:text-xl lg:text-2xl">{review}</p>
            <p className="mt-4 text-sm md:text-base font-semibold">{author}, <span className="font-normal">{role}</span></p>
            <p className="mt-2 text-xs md:text-sm lg:text-base">SUPERPEOPLE®</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
