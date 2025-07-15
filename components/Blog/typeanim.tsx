'use client'

import { ReactTyped } from "react-typed";

const TextAnimation = () => {
  return (
    <div>
      <h1 className="max-sm:text-4xl max-sm:font-semibold max-sm:line-clamp-6 text-[#351A5F]">
           Get in touch or create an  {""}
        <ReactTyped strings={["account>/"]} typeSpeed={150} loop className=" text-[#7F2EF8]"/>
      </h1>
    </div>
  );
};

export default TextAnimation;