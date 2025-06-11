// import Image from "next/image";
// import React from "react";

// const About = () => {
//   return (
//     <section
//       className="py-12 px-8 max-md:p-5 flex flex-col items-center"
//       id="about"
//     >
//       <h3 className="text-center text-2xl text-primary font-semibold">
//         About Us
//       </h3>
//       <div className="flex mt-10 w-full flex-col items-center lg:flex-row lg:w-3/5 mx-auto max-md:w-full gap-8 max-md:flex-wrap">
//         {/* Text Section */}
//         <div className="w-full lg:w-1/2">
//           <h4 className="text-primary font-semibold text-center lg:text-left">
//             Who We Are
//           </h4>
//           <p className="text-justify text-sm leading-8 mt-4">
//             We are a Technology Solutions Provider based in Kenya and serving
//             the East African Region. Our core focus is the provision of IT
//             infrastructure and hardware, Software Development, Business
//             Consulting, and Training. Our main focus for East Africa is to
//             provide our clients with solutions to their technology needs from
//             developing software systems, deploying, maintenance, and provision
//             of hardware and consumables. We provide a broad range of products
//             and solutions as per customer needs through strategic partnerships
//             with world brands like Zebra, among others. We are counted amongst
//             the known service providers of a wide range of technology solutions
//             across East Africa and many more.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2">
//           <Image
//             src="/assets/people.jpg"
//             width={600}
//             height={300}
//             alt="About Us"
//             className="rounded-md mx-auto lg:mx-0"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <section
      className="py-12 px-8 max-md:p-5 flex flex-col items-center"
      id="about"
    >
      <h3 className="text-center text-2xl text-primary font-semibold">
        About Us
      </h3>
      <div className="flex mt-10 w-full flex-col items-center lg:flex-row lg:w-3/5 mx-auto max-md:w-full gap-8 max-md:flex-wrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-primary font-semibold text-center lg:text-left">
            Who We Are
          </h4>
          <p className="text-justify text-sm leading-8 mt-4">
            We are a Technology Solutions Provider based in Kenya and serving
            the East African Region. Our core focus is the provision of IT
            infrastructure and hardware, Software Development, Business
            Consulting, and Training. Our main focus for East Africa is to
            provide our clients with solutions to their technology needs from
            developing software systems, deploying, maintenance, and provision
            of hardware and consumables. We provide a broad range of products
            and solutions as per customer needs through strategic partnerships
            with world brands like Zebra, among others. We are counted amongst
            the known service providers of a wide range of technology solutions
            across East Africa and many more.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/people.jpg"
            width={600}
            height={300}
            alt="About Us"
            className="rounded-md mx-auto lg:mx-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
