'use client';
import React, { useEffect } from "react";
import "./ind.css";
import Image from 'next/image';
import sec from "../../public/images/about/main-2.png";
import bg from "../../public/images/about/main.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutSectionOne() {
  useEffect(() => {
    Aos.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="about" className="relative h-[39rem] bg-[#2B0054] flex items-center justify-center overflow-hidden 0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"
        />
      </div>

      {/* Foreground Image */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div data-aos='fade-out'>
          <Image
            src={sec}
            alt="Foreground"
            width={900} // Adjust the width as needed
            height={800} // Adjust the height as needed
          />
        </div>
        <div className="w-full max-[768px]:w-[90%] border-b-2 border-body-color/[.15] dark:border-white/[.15] pb-16  md:pb-20 lg:pb-28"></div>
      </div>
      
    </section>
  );
}

export default AboutSectionOne;







// 'use client';
// import React, { useEffect } from "react";
// import "./ind.css";

// import Image from 'next/image';
// import sec from "../../public/images/about/main-2.png";
// import bg from "../../public/images/about/main.jpg";
// import Aos from 'aos'
// import 'aos/dist/aos.css'

// function AboutSectionOne() {
//   useEffect(() => {
//     Aos.init({ duration: 1200, easing: 'ease-in-out', once: true });
//   }, []);
//   return (

//     <div className="relative overflow-hidden flex items-center justify-center h-screen w-full  ">

//       <div className="mt-16  ">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
//         </div>

//         {/* Foreground Image */}
//         <div className="relative z-10 flex items-center justify-center">
//           <Image src={sec} alt="Foreground" data-aos='fade-out' />
//         </div>

//       </div>

//     </div>

//   );
// }

// export default AboutSectionOne;

