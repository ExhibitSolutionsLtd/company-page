// import React from "react";
// import Image from "next/image";

// const BlogNews = () => {
//   const blogs = [
//     {
//       id: 1,
//       image: "/assets/blogs/launch.jpg",
//       title: "Launching RFID Solution (AfyaTrail).",
//       description: `The successful launch of AfyaTrail (The first RFID solution in healthcare for the East African Region) represents a vision that has been close to our hearts—a vision of leveraging technology to solve real challenges faced by our clients in the healthcare sector.`,
//       tags: ["RFID", "Product Launch"],
//       date: "",
//     },
//     {
//       id: 2,
//       image: "/assets/blogs/partner.jpg",
//       title: "🌍 Strengthening Partnerships Across Borders! ✈️.",
//       description: `Following the successful launch of AfyaTrail, our cutting-edge healthcare solution, we had the opportunity to send our Sales Manager, Viola Prizz Masanja, to London, United Kingdom, for a visit to our key partners, Zebra Technologies, warmly received by Moussa Diallo-Keita. Viola had the privilege of touring their EMEA HQ in the UK where she connected with the Zebra team and explored their innovative solutions firsthand.`,
//       tags: ["RFID Technology"],
//       date: "",
//     },
//     {
//       id: 3,
//       image: "/assets/blogs/solutions.jpg",
//       title: "Upcoming Solution",
//       description:
//         "Be ready to be mind-blown by some of our upcoming solutions. Stay Tuned!",
//       tags: ["Technology", "Solution"],
//       date: "",
//     },
//     {
//       id: 4,
//       image: "/assets/blogs/Ally_SA.jpeg",
//       title: "🇿🇦 Zebra RPS: Accelerating Innovation in South Africa!",
//       description: `Our CEO, Ally Hussein, had the distinct honor of attending the Zebra Partner Summit (RPS) in South Africa — an exclusive annual gathering of industry leaders and innovators. Centered around the theme *Accelerate*, the summit fostered dynamic conversations on emerging technologies, strategic partnerships, and transformative solutions. The experience was both inspiring and energizing, reinforcing our commitment to staying at the forefront of innovation and collaboration.`,
//       tags: ["Zebra Technologies", "Events", "Innovation"],
//       date: "",
//     },
//   ];

//   return (
//     <div className="py-16 px-8 bg-[#] max-md:p-5">
//       <h2 className="text-center text-3xl font-bold text-primary mb-10">
//         Blog & News
//       </h2>
//       <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 mx-auto w-full max-w-7xl">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="relative w-full h-52">
//               {/* <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 fill
//                 sizes="auto"
//                 className="object-cover"
//               /> */}
//               <div className="relative h-64 w-full">
//                 {" "}
//                 {/* Set your desired height here */}
//                 <Image
//                   src={blog.image}
//                   alt={blog.title}
//                   fill
//                   sizes="auto"
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <div className="p-6">
//               <div className="flex space-x-2 mb-4">
//                 {blog.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-yellow-100 text-primary text-xs font-semibold px-3 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 {blog.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{blog.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogNews;

import React from "react";

const BlogNews = () => {
  const blogs = [
    {
      id: 1,
      image: "/assets/blogs/launch.jpg",
      title: "Launching RFID Solution (AfyaTrail).",
      description: `The successful launch of AfyaTrail (The first RFID solution in healthcare for the East African Region) represents a vision that has been close to our hearts—a vision of leveraging technology to solve real challenges faced by our clients in the healthcare sector.`,
      tags: ["RFID", "Product Launch"],
      date: "",
    },
    {
      id: 2,
      image: "/assets/blogs/partner.jpg",
      title: "🌍 Strengthening Partnerships Across Borders! ✈️.",
      description: `Following the successful launch of AfyaTrail, our cutting-edge healthcare solution, we had the opportunity to send our Sales Manager, Viola Prizz Masanja, to London, United Kingdom, for a visit to our key partners, Zebra Technologies, warmly received by Moussa Diallo-Keita. Viola had the privilege of touring their EMEA HQ in the UK where she connected with the Zebra team and explored their innovative solutions firsthand.`,
      tags: ["RFID Technology"],
      date: "",
    },
    {
      id: 3,
      image: "/assets/blogs/solutions.jpg",
      title: "Upcoming Solution",
      description:
        "Be ready to be mind-blown by some of our upcoming solutions. Stay Tuned!",
      tags: ["Technology", "Solution"],
      date: "",
    },
    {
      id: 4,
      image: "/assets/blogs/Ally_SA.jpeg",
      title: "🇿🇦 Zebra RPS: Accelerating Innovation in South Africa!",
      description: `Our CEO, Ally Hussein, had the distinct honor of attending the Zebra Partner Summit (RPS) in South Africa — an exclusive annual gathering of industry leaders and innovators. Centered around the theme *Accelerate*, the summit fostered dynamic conversations on emerging technologies, strategic partnerships, and transformative solutions. The experience was both inspiring and energizing, reinforcing our commitment to staying at the forefront of innovation and collaboration.`,
      tags: ["Zebra Technologies", "Events", "Innovation"],
      date: "",
    },
  ];

  return (
    <div className="py-16 px-8 max-md:p-5">
      <h2 className="text-center text-3xl font-bold text-primary mb-10">
        Blog & News
      </h2>
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 mx-auto w-full max-w-7xl">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex space-x-2 mb-4 flex-wrap">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-yellow-100 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogNews;
