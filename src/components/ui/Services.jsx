// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Services = () => {
//   const solutions = [
//     {
//       id: 1,
//       icon: "",
//       title: "Creative Solutions",
//       description:
//         "We offer a wide range of creative solutions and services including developing software systems, deploying maintenance, and providing hardware and consumables within Kenya and the larger East Africa.",
//     },
//     {
//       id: 2,
//       icon: "",
//       title: "Cost-Effective Services",
//       description:
//         "Our services are considered qualitative and cost-effective. We have designed and deployed warehouse management systems, asset tracking, and RFID solutions for reputable organizations and brands within the region.",
//     },
//     {
//       id: 3,
//       icon: "",
//       title: "Quality Services",
//       description:
//         "The exemplary quality and service in addition to customer focus have helped us receive accolades from our clients all over. Additionally, we manage some of our clients' entire IT function, allowing them to focus on their core business while maintaining world-class standards.",
//     },
//   ];

//   const services = [
//     {
//       id: 1,
//       image: "/business-application-consulting.png",
//       title: "Business Application and Consulting",
//       href: "/services/business-consulting",
//     },
//     {
//       id: 2,
//       image: "/IT-Infrastructure.jpg",
//       title: "IT Infrastructure",
//       href: "/services/it-infrastructure",
//     },
//     {
//       id: 3,
//       image: "/IT-Services.jpg",
//       title: "IT Managed Services",
//       href: "/services/it-services",
//     },
//     {
//       id: 4,
//       image: "/software.png",
//       title: "Software Development",
//       href: "/services/softwares",
//     },
//   ];

//   return (
//     <div className="py-16 px-8 max-md:p-5 bg-gray-50">
//       <section id="services" className="mb-12">
//         <h3 className="text-center text-3xl text-primary font-bold mb-8">
//           Our Services
//         </h3>

//         <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 mx-auto w-full max-w-6xl">
//           {solutions.map((solution) => (
//             <div
//               key={solution.id}
//               className="p-6 bg-white shadow-lg rounded-lg border hover:shadow-xl transition-shadow duration-300"
//             >
//               <h3 className="text-xl font-semibold text-primary mb-3">
//                 {solution.title}
//               </h3>
//               <p className="text-gray-600">{solution.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Service Images Section */}
//       <div className="mt-12">
//         <h3 className="text-center text-3xl text-primary font-bold mb-8">
//           What We Offer
//         </h3>
//         <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 mx-auto w-full max-w-6xl">
//           {services.map((service) => (
//             <Link
//               href={service?.href}
//               key={service.id}
//               className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <Image
//                 src={service.image}
//                 width={250}
//                 height={250}
//                 alt={service.title}
//                 className="rounded-md mb-4"
//                 unoptimized
//               />
//               <h3 className="text-lg font-semibold text-primary text-center">
//                 {service.title}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";

const Services = () => {
  const solutions = [
    {
      id: 1,
      icon: "",
      title: "Creative Solutions",
      description:
        "We offer a wide range of creative solutions and services including developing software systems, deploying maintenance, and providing hardware and consumables within Kenya and the larger East Africa.",
    },
    {
      id: 2,
      icon: "",
      title: "Cost-Effective Services",
      description:
        "Our services are considered qualitative and cost-effective. We have designed and deployed warehouse management systems, asset tracking, and RFID solutions for reputable organizations and brands within the region.",
    },
    {
      id: 3,
      icon: "",
      title: "Quality Services",
      description:
        "The exemplary quality and service in addition to customer focus have helped us receive accolades from our clients all over. Additionally, we manage some of our clients' entire IT function, allowing them to focus on their core business while maintaining world-class standards.",
    },
  ];

  const services = [
    {
      id: 1,
      image: "/business-application-consulting.png",
      title: "Business Application and Consulting",
      href: "/services/business-consulting",
    },
    {
      id: 2,
      image: "/IT-Infrastructure.jpg",
      title: "IT Infrastructure",
      href: "/services/it-infrastructure",
    },
    {
      id: 3,
      image: "/IT-Services.jpg",
      title: "IT Managed Services",
      href: "/services/it-services",
    },
    {
      id: 4,
      image: "/software.png",
      title: "Software Development",
      href: "/services/softwares",
    },
  ];

  return (
    <div className="py-16 px-8 max-md:p-5 bg-gray-50">
      {/* Solutions Section */}
      <section id="services" className="mb-12">
        <h3 className="text-center text-3xl text-primary font-bold mb-8">
          Our Services
        </h3>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 mx-auto w-full max-w-6xl">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="p-6 bg-white shadow-lg rounded-lg border hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer Section */}
      <div className="mt-12">
        <h3 className="text-center text-3xl text-primary font-bold mb-8">
          What We Offer
        </h3>
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 mx-auto w-full max-w-6xl">
          {services.map((service) => (
            <a
              href={service.href}
              key={service.id}
              className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.image}
                width="250"
                height="250"
                alt={service.title}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-primary text-center">
                {service.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
