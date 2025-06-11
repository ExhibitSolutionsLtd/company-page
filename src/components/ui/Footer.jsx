// import React from "react";
// import Image from "next/image";
// import { Mail, Phone, MapPin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-[#386c9c] to-primary text-white py-12">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="">
//           <h4 className="text-white font-semibold mb-2 text-xl">Queries ?</h4>
//           <p className="text-sm mt-2">
//             {" "}
//             Reach us <br />
//             Monday – Saturday from 8 am to 5 pm
//           </p>
//           <div className="mt-1 flex  flex-col gap-y-3">
//             <p className="flex gap-x-2 items-center text-md">
//               {" "}
//               <span>
//                 <MapPin size={18} />
//               </span>{" "}
//               Malik Heights, Ngong Rd, 6th Floor, Room 601
//             </p>
//             <p className="flex gap-x-2 items-center text-md">
//               {" "}
//               <span>
//                 <Phone size={18} />
//               </span>{" "}
//               +254 20 8100101
//             </p>
//             <p className="flex gap-x-2 items-center text-md">
//               {" "}
//               <span>
//                 <Mail size={18} />
//               </span>{" "}
//               <a href="mailto:info@exhibitsolutions.co.ke" target="_blank">
//                 info@exhibitsolutions.co.ke
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Company Section */}
//         <div>
//           <h4 className="text-white font-semibold mb-4 text-xl">Company</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-white">
//                 Our Team
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Showcase
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-white">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div>
//           <h4 className="text-white font-semibold mb-4 text-xl">Services</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="#" className="hover:text-white">
//                 Web Design & Development
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Maintenance On IT
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 Business Application and Consulting
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-white">
//                 IT Services
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Connect Section */}
//         <div className="px-4 rounded-xl">
//           <h4 className="text-white font-semibold mb-1 text-xl">Connect</h4>

//           <div className="rounded-xl">
//             <div className="flex justify-center items-center">
//               <Image
//                 src="/full-logo.png"
//                 width={250}
//                 height={30}
//                 alt="Exhibit IT Solutions logo"
//               />
//             </div>
//           </div>
//           <div className="flex space-x-4 justify-center mt-4 bg-white/80 p-2 rounded-full">
//             <a
//               href="https://www.facebook.com/profile.php?id=100090401272340&mibextid=ZbWKwL"
//               target="_blank"
//               className="hover:text-secondary"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 src="/assets/facebook.svg"
//                 width={30}
//                 height={30}
//                 alt="Facebook Logo"
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/exhibit-solutions-273857240/"
//               target="_blank"
//               className="hover:text-secondary"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 src="/assets/linkedin.svg"
//                 width={30}
//                 height={30}
//                 alt="Linkedin Logo"
//               />
//             </a>
//             <a
//               href="https://www.x.com/ExhibitSolutio2"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-secondary"
//             >
//               <Image
//                 src="/assets/twitter.svg"
//                 width={30}
//                 height={30}
//                 alt="twitter Logo"
//               />
//             </a>
//             <a
//               href="https://www.instagram.com/exhibitsolutions"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-secondary"
//             >
//               <Image
//                 src="/assets/instagram.svg"
//                 width={30}
//                 height={30}
//                 alt="instagram Logo"
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="text-center text-sm text-white mt-12 flex items-center justify-center">
//         <p>© 2025. Exhibit IT solutions. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#386c9c] to-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-xl">Queries ?</h4>
          <p className="text-sm mt-2">
            Reach us <br />
            Monday – Saturday from 8 am to 5 pm
          </p>
          <div className="mt-1 flex flex-col gap-y-3">
            <p className="flex gap-x-2 items-center text-md">
              <MapPin size={18} />
              Malik Heights, Ngong Rd, 6th Floor, Room 601
            </p>
            <p className="flex gap-x-2 items-center text-md">
              <Phone size={18} />
              +254 20 8100101
            </p>
            <p className="flex gap-x-2 items-center text-md">
              <Mail size={18} />
              <a
                href="mailto:info@exhibitsolutions.co.ke"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@exhibitsolutions.co.ke
              </a>
            </p>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Showcase
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Web Design & Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Maintenance On IT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Business Application and Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                IT Services
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="px-4 rounded-xl">
          <h4 className="text-white font-semibold mb-1 text-xl">Connect</h4>

          {/* Logo */}
          <div className="flex justify-center items-center mt-4">
            <img
              src="/full-logo.png"
              width={250}
              height={30}
              alt="Exhibit IT Solutions logo"
              loading="lazy"
            />
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 justify-center mt-4 bg-white/80 p-2 rounded-full">
            <a
              href="https://www.facebook.com/profile.php?id=100090401272340&mibextid=ZbWKwL"
              target="_blank"
              className="hover:text-secondary"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/facebook.svg"
                width={30}
                height={30}
                alt="Facebook Logo"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/exhibit-solutions-273857240/"
              target="_blank"
              className="hover:text-secondary"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linkedin.svg"
                width={30}
                height={30}
                alt="Linkedin Logo"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.x.com/ExhibitSolutio2"
              target="_blank"
              className="hover:text-secondary"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/twitter.svg"
                width={30}
                height={30}
                alt="Twitter Logo"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.instagram.com/exhibitsolutions"
              target="_blank"
              className="hover:text-secondary"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/instagram.svg"
                width={30}
                height={30}
                alt="Instagram Logo"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-white mt-12 flex items-center justify-center">
        <p>© 2025. Exhibit IT Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
