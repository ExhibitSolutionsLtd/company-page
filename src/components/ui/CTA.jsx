// import React from "react";
// import Image from "next/image";
// import { FaCheck } from "react-icons/fa";
// import { BsPlayCircle } from "react-icons/bs";

// const CTASection = () => {
//   return (
//     <div className="bg-primary text-white py-16 px-8 max-lg:flex-wrap max-md:p-5">
//       <div className="max-w-6xl mx-auto flex justify-between items-center gap-10 max-lg:flex-col">
//         {/* Left: Image Section */}
//         <div className="w-1/2 max-md:w-full max-md:mx-auto max-lg:w-full">
//           <Image
//             src="/assets/team-collaboration.jpg"
//             alt="Team collaboration"
//             width={600}
//             height={300}
//             className="rounded-lg "
//           />
//         </div>

//         {/* Right: Text Section */}
//         <div className="w-1/2 max-lg:w-full">
//           <h2 className="text-4xl font-bold mb-6 leading-tight">
//             5+ years of experience in this world, being the first and foremost
//             choice of business people.
//           </h2>
//           <ul className="grid grid-cols-2 gap-y-4 text-lg">
//             {[
//               "An abundance of resources",
//               "Support that Helps",
//               "Optimize search engines",
//               "Add advanced features",
//               "Edit your mobile view",
//             ].map((text, index) => (
//               <li key={index} className="flex items-center gap-2">
//                 <FaCheck className="text-yellow-500" />
//                 {text}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTASection;

import React from "react";
import { FaCheck } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";

const CTASection = () => {
  return (
    <div className="bg-primary text-white py-16 px-8 max-lg:flex-wrap max-md:p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-10 max-lg:flex-col">
        {/* Left: Image Section */}
        <div className="w-1/2 max-md:w-full max-md:mx-auto max-lg:w-full">
          <img
            src="/assets/team-collaboration.jpg"
            alt="Team collaboration"
            width={600}
            height={300}
            className="rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-1/2 max-lg:w-full">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            5+ years of experience in this world, being the first and foremost
            choice of business people.
          </h2>
          <ul className="grid grid-cols-2 gap-y-4 text-lg">
            {[
              "An abundance of resources",
              "Support that Helps",
              "Optimize search engines",
              "Add advanced features",
              "Edit your mobile view",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-yellow-500" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
