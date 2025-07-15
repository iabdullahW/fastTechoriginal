import Image from "next/image";
import "./style.css";
import { videoData } from "@/utils/data";


const AboutSectionOne = () => {
 const {topContent}=videoData;

  return (
    <section id="about" className="video-section  pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div id="about" className="-mx-4 flex flex-wrap items-center ">
            <div className="w-full px-4 lg:w-1/2">
             <p>{topContent.head}</p>
             <h1>{topContent.title}</h1>
             <p>{topContent.paragraph}</p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
