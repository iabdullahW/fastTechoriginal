import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import Image from "next/image";
import about from "../public/images/about/about.png";
import Uprice from "@/components/Pricing/Uprice";
import Ublog from "@/components/Blog/Ublog";
import Per from "@/components/Blog/Per";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <div className="overflow-x-hidden">
     <ScrollUp />
      <Hero />
      <div className=" relative">
        <Features />
        <Image  src={about} alt="hero"  className="h-[400px] w-[600px] absolute right-5 bottom-5  max-[768px]:h-[300px] max-[768px]:w-[300px] max-[500px]:hidden  "/>
      <Video />
      </div>
      <div className="bg-[#2B0054]">
      <Brands />
      <AboutSectionOne />
      </div>
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Uprice/>
      <Pricing />
      <Ublog/>
      <Blog />
    <Per/>
     </div>
    </>
  );
}
