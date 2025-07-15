'use client'
import React from 'react'
import Image from 'next/image'
import Per from "../../public/images/blog/person.png"
import TextAnimation from './typeanim';

function Person() {
  return (
    <section className="flex justify-center text-center max-[768px]:flex-col max-[768px]:items-center ">
      <div className="flex flex-col items-center  max-[768px]:py-5">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#351A5F]">
          Ready to get started?
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold text-[#351A5F] mt-4">
          <TextAnimation/>
        </h1>
        <p className="text-sm text-[#7F2EF8] mt-4">
          Start using Billie at iCloud.com →
        </p>
      </div>
      <div className=" ">
        <Image src={Per} alt="Person" className="h-auto w-auto " />
      </div>
    </section>
  )
}

export default Person;
// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import Per from "../../public/images/blog/person.png"
// import TextAnimation from './typeanim';

// function Person() {
//   return (
//     <section className="flex justify-center items-center text-center h-[27rem]   relative overflow-hidden">
//       <div className="flex flex-col items-center md:items-start max-w-lg">
//         <h1 className="text-3xl md:text-5xl font-semibold text-[#351A5F]">
//           Ready to get started?
//         </h1>
//         <h1 className="text-2xl md:text-4xl font-semibold text-[#351A5F] mt-4">
//           <TextAnimation/>
//         </h1>
//         <p className="text-sm text-[#7F2EF8] mt-4 underline">
//           Start using Billie at iCloud.com →
//         </p>
//       </div>
//       <div className="bottom-0">
//         <Image src={Per} alt="Person" className="h-auto w-auto" />
//       </div>
//     </section>
//   )
// }

// export default Person;



