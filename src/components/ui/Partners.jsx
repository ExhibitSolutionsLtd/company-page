// import Image from "next/image";
// import React from "react";

// const Partners = () => {
//   const partners = [
//     { id: 1, url: "/assets/partners/zebra.png", alt: "Zebra Logo" },
//     { id: 2, url: "/assets/partners/checkpoint.png", alt: "Checkpoint Logo" },
//     { id: 3, url: "/assets/partners/cisco.png", alt: "Cisco Logo" },
//     { id: 4, url: "/assets/partners/entrust.png", alt: "Entrust Logo" },
//     { id: 5, url: "/assets/partners/jabra.png", alt: "Jabra Logo" },
//     { id: 6, url: "/assets/partners/juniper.png", alt: "Juniper Logo" },
//     { id: 7, url: "/assets/partners/Kaspersky.png", alt: "Kaspersky Logo" },
//     { id: 8, url: "/assets/partners/Lenel.png", alt: "Lenel Logo" },
//     { id: 9, url: "/assets/partners/ruckus.png", alt: "Ruckus Logo" },
//     { id: 10, url: "/assets/partners/schneider.png", alt: "Schneider Logo" },
//     { id: 11, url: "/assets/partners/SecuGen.png", alt: "SecuGen Logo" },
//     { id: 12, url: "/assets/partners/suprema.png", alt: "Suprema Logo" },
//     { id: 13, url: "/assets/partners/ZK_Teco.png", alt: "ZKTeco Logo" },
//   ];

//   return (
//     <div className="w-4/5 mx-auto p-5 mt-6">
//       <h3 className="text-center text-2xl text-primary font-semibold">
//         Our Amazing Partners
//       </h3>
//       <div className="w-full flex justify-center md:justify-between items-center mt-6 gap-6 flex-wrap">
//         {partners?.map((partner, i) => (
//           <div
//             key={partner?.id || i}
//             className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/8 p-4"
//           >
//             <Image
//               src={partner?.url}
//               width={150}
//               height={100}
//               alt={partner?.alt}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Partners;

import React from "react";

const Partners = () => {
  const partners = [
    { id: 1, url: "/assets/partners/zebra.png", alt: "Zebra Logo" },
    { id: 2, url: "/assets/partners/checkpoint.png", alt: "Checkpoint Logo" },
    { id: 3, url: "/assets/partners/cisco.png", alt: "Cisco Logo" },
    { id: 4, url: "/assets/partners/entrust.png", alt: "Entrust Logo" },
    { id: 5, url: "/assets/partners/jabra.png", alt: "Jabra Logo" },
    { id: 6, url: "/assets/partners/juniper.png", alt: "Juniper Logo" },
    { id: 7, url: "/assets/partners/Kaspersky.png", alt: "Kaspersky Logo" },
    { id: 8, url: "/assets/partners/Lenel.png", alt: "Lenel Logo" },
    { id: 9, url: "/assets/partners/ruckus.png", alt: "Ruckus Logo" },
    { id: 10, url: "/assets/partners/schneider.png", alt: "Schneider Logo" },
    { id: 11, url: "/assets/partners/SecuGen.png", alt: "SecuGen Logo" },
    { id: 12, url: "/assets/partners/suprema.png", alt: "Suprema Logo" },
    { id: 13, url: "/assets/partners/ZK_Teco.png", alt: "ZKTeco Logo" },
  ];

  return (
    <div className="w-4/5 mx-auto p-5 mt-6">
      <h3 className="text-center text-2xl text-primary font-semibold">
        Our Amazing Partners
      </h3>
      <div className="w-full flex justify-center md:justify-between items-center mt-6 gap-6 flex-wrap">
        {partners?.map((partner, i) => (
          <div
            key={partner?.id || i}
            className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/8 p-4"
          >
            <img
              src={partner.url}
              width="150"
              height="100"
              alt={partner.alt}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
