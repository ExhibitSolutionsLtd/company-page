// import React from "react";
// import Image from "next/image";

// const Team = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Ally Hussein",
//       role: "Founder and CEO",
//       image: "/assets/team/Ally.jpg",
//       linkedin: "https://www.linkedin.com/in/ally-yassin-hussein-0292b7140/",
//       instagram: "",
//       twitter: "",
//     },
//     {
//       id: 2,
//       name: "Daniel Sambu",
//       role: "Operations Manager",
//       image: "/assets/team/Daniel-Sambu.png",
//       linkedin: "https://www.linkedin.com/in/daniel-sambu-1761a616b/",
//       instagram: "",
//       twitter: "",
//     },
//     {
//       id: 3,
//       name: "Bridget Mueni",
//       role: "Administrative Assistant",
//       image: "/assets/team/bridget.jpeg",
//       linkedin:
//         "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
//       instagram: "",
//       twitter: "",
//     },
//     {
//       id: 4,
//       name: "Margaret Macharia",
//       role: "Sales and Marketing",
//       image: "/assets/team/maggie.jpeg",
//       linkedin:
//         "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
//       instagram: "",
//       twitter: "",
//     },
//     {
//       id: 5,
//       name: "Stanely Ayumba",
//       role: "Sales and Marketing",
//       image: "/assets/team/stanely.jpeg",
//       linkedin:
//         "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
//       instagram: "",
//       twitter: "",
//     },

//     {
//       id: 6,
//       name: "Wilson Muchiri",
//       role: "Software Engineer",
//       image: "/assets/team/Wilson.jpeg",
//       linkedin:
//         "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
//       instagram: "",
//       twitter: "",
//     },
//     {
//       id: 7,
//       name: "Patricia Chelang'at",
//       role: "Software Engineer",
//       image: "/assets/team/patricia.jpeg",
//       linkedin:
//         "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
//       instagram: "",
//       twitter: "",
//     },
//   ];

//   return (
//     <div className="py-16 px-8 max-w-7xl mx-auto">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
//         <p className="text-gray-600 mt-2">
//           Our talented team members work hard to bring your ideas to life.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {teamMembers.map((member) => (
//           <div
//             key={member.id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             {/* Member Image */}
//             <Image
//               src={member.image}
//               alt={member.name}
//               width={100}
//               height={100}
//               className="rounded-full mx-auto mb-4"
//             />
//             <h3 className="text-lg font-semibold text-gray-800 text-center">
//               {member.name}
//             </h3>
//             <p className="text-gray-500 text-center">{member.role}</p>

//             <div className="mt-4 flex justify-center space-x-4">
//               <a
//                 href={`https://linkedin.com/in/${member.linkedin}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-700 hover:text-blue-500 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   className="h-6 w-6"
//                 >
//                   <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.4h-3v-5.5c0-1.38-.62-2.5-2-2.5s-2 1.12-2 2.5v5.5h-3v-10h3v1.54c.59-.92 1.59-1.54 3-1.54 2.42 0 4 1.72 4 4.5v5.5z" />
//                 </svg>
//               </a>
//               <a
//                 href={`https://instagram.com/${member.instagram}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-pink-500 hover:text-pink-400 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   className="h-6 w-6"
//                 >
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 2.012.24 2.478.415a4.92 4.92 0 011.773 1.152 4.92 4.92 0 011.152 1.773c.175.466.361 1.308.415 2.478.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 2.012-.415 2.478a4.92 4.92 0 01-1.152 1.773 4.92 4.92 0 01-1.773 1.152c-.466.175-1.308.361-2.478.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-2.012-.24-2.478-.415a4.92 4.92 0 01-1.773-1.152 4.92 4.92 0 01-1.152-1.773c-.175-.466-.361-1.308-.415-2.478-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-2.012.415-2.478a4.92 4.92 0 011.152-1.773 4.92 4.92 0 011.773-1.152c.466-.175 1.308-.361 2.478-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.262.058-2.127.242-2.89.51a6.927 6.927 0 00-2.495 1.482 6.927 6.927 0 00-1.482 2.495c-.268.763-.452 1.628-.51 2.89-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.262.242 2.127.51 2.89a6.927 6.927 0 001.482 2.495 6.927 6.927 0 002.495 1.482c.763.268 1.628.452 2.89.51 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.262-.058 2.127-.242 2.89-.51a6.927 6.927 0 002.495-1.482 6.927 6.927 0 001.482-2.495c.268-.763.452-1.628.51-2.89.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.262-.242-2.127-.51-2.89a6.927 6.927 0 00-1.482-2.495 6.927 6.927 0 00-2.495-1.482c-.763-.268-1.628-.452-2.89-.51-1.28-.058-1.688-.07-4.947-.07zm0 7.36a4.64 4.64 0 110 9.28 4.64 4.64 0 010-9.28zm0-1.799a6.44 6.44 0 100 12.88 6.44 6.44 0 000-12.88zm7.69-1.264a1.481 1.481 0 11-2.962 0 1.481 1.481 0 012.962 0z" />
//                 </svg>
//               </a>
//               <a
//                 href={`https://twitter.com/${member.twitter}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:text-blue-400 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   className="h-6 w-6"
//                 >
//                   <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.92 4.92 0 002.15-2.72c-.95.56-2.02.97-3.15 1.2a4.92 4.92 0 00-8.39 4.48c-4.09-.2-7.72-2.16-10.14-5.12a4.92 4.92 0 00-.67 2.48c0 1.71.87 3.21 2.19 4.1a4.92 4.92 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.22.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 20.88a13.9 13.9 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64A10.15 10.15 0 0024 4.56z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ally Hussein",
      role: "Founder and CEO",
      image: "/assets/team/Ally.jpg",
      linkedin: "https://www.linkedin.com/in/ally-yassin-hussein-0292b7140/",
      instagram: "",
      twitter: "",
    },
    {
      id: 2,
      name: "Daniel Sambu",
      role: "Operations Manager",
      image: "/assets/team/Daniel-Sambu.png",
      linkedin: "https://www.linkedin.com/in/daniel-sambu-1761a616b/",
      instagram: "",
      twitter: "",
    },
    {
      id: 3,
      name: "Bridget Mueni",
      role: "Administrative Assistant",
      image: "/assets/team/bridget.jpeg",
      linkedin:
        "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
      instagram: "",
      twitter: "",
    },
    {
      id: 4,
      name: "Margaret Macharia",
      role: "Sales and Marketing",
      image: "/assets/team/maggie.jpeg",
      linkedin:
        "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
      instagram: "",
      twitter: "",
    },
    {
      id: 5,
      name: "Stanely Ayumba",
      role: "Sales and Marketing",
      image: "/assets/team/stanely.jpeg",
      linkedin:
        "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
      instagram: "",
      twitter: "",
    },
    {
      id: 6,
      name: "Wilson Muchiri",
      role: "Software Engineer",
      image: "/assets/team/Wilson.jpeg",
      linkedin:
        "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
      instagram: "",
      twitter: "",
    },
    {
      id: 7,
      name: "Patricia Chelang'at",
      role: "Software Engineer",
      image: "/assets/team/patricia.jpeg",
      linkedin:
        "https://www.linkedin.com/company/exhibit-it-solutions-ltd/posts/?feedView=all",
      instagram: "",
      twitter: "",
    },
  ];

  return (
    <div className="py-16 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">
          Our talented team members work hard to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Member Image using raw img */}
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full mx-auto mb-4 w-[100px] h-[100px] object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {member.name}
            </h3>
            <p className="text-gray-500 text-center">{member.role}</p>

            <div className="mt-4 flex justify-center space-x-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-500 transition-colors"
                >
                  {/* LinkedIn SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.4h-3v-5.5c0-1.38-.62-2.5-2-2.5s-2 1.12-2 2.5v5.5h-3v-10h3v1.54c.59-.92 1.59-1.54 3-1.54 2.42 0 4 1.72 4 4.5v5.5z" />
                  </svg>
                </a>
              )}
              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transition-colors"
                >
                  {/* Instagram SVG */}
                  {/* (Keep same as before) */}
                </a>
              )}
              {member.twitter && (
                <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  {/* Twitter SVG */}
                  {/* (Keep same as before) */}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
