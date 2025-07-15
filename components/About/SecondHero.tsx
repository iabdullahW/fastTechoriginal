"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import center from "../../public/images/about/center.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function SecondHero() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "linear", once: false });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-auto  w-full gap-y-6 p-6">
      <h1
        className="text-4xl font-bold text-black text-center"
        data-aos="fade-down"
      >
        Our Mission
      </h1>
      <Image
        src={center}
        alt="Hero image"
        className=" h-[500px] w-[700px] mx-auto"
        data-aos="fade-up"
      />
      <p
        className="text-lg text-black leading-relaxed text-center max-w-2xl"
        data-aos="fade-left"
      >
        To the best of our abilities, add value to our clients’ businesses by
        providing them with innovative, dependable, high-quality solutions and
        services.
      </p>
    </div>
  );
}

export default SecondHero;
