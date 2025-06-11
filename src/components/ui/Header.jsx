// "use client";

// import Image from "next/image";
// import React, { useState } from "react";

// const Header = ({
//   about = "#about",
//   contact = "#contact",
//   home = "/",
//   services = "#services",
// }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="flex justify-between items-center py-5 px-6 bg-white shadow-md h-[70px] ">
//       {/* Logo */}
//       <a href="/" className="">
//         <Image
//           src="/full-logo.png"
//           width={150}
//           height={20}
//           alt="Exhibit IT Solutions logo"
//         />
//       </a>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex space-x-12">
//         <a
//           href={home}
//           className="text-gray-700 font-semibold text-lg hover:text-primary"
//         >
//           Home
//         </a>
//         <a href={about} className="font-semibold text-lg text-primary">
//           About
//         </a>
//         <a href={services} className="font-semibold text-lg text-primary">
//           Services
//         </a>
//         <a href={contact} className="font-semibold text-lg text-primary">
//           Contact
//         </a>
//       </nav>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="text-primary ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-24 left-0 w-full bg-white shadow-md z-10 md:hidden">
//           <nav className="flex flex-col items-center space-y-4 py-4">
//             <a href={home} className="font-semibold text-xl text-primary">
//               Home
//             </a>
//             <a href={about} className="font-semibold text-xl text-primary">
//               About
//             </a>
//             <a href={services} className="font-semibold text-xl text-primary">
//               Services
//             </a>
//             <a href={contact} className="font-semibold text-xl text-primary">
//               Contact
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";

const Header = ({
  about = "#about",
  contact = "#contact",
  home = "/",
  services = "#services",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-5 px-6 bg-white shadow-md h-[70px] sticky top-0 z-50">
      {/* Logo */}
      <a href="/">
        <img
          src="/full-logo.png"
          width={150}
          height={20}
          alt="Exhibit IT Solutions logo"
          className="hover:opacity-80 transition-opacity"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-12">
        <a
          href={home}
          className="text-gray-700 font-semibold text-lg hover:text-primary transition-colors duration-200"
        >
          Home
        </a>
        <a
          href={about}
          className="font-semibold text-lg text-primary hover:text-primary-dark transition-colors duration-200"
        >
          About
        </a>
        <a
          href={services}
          className="font-semibold text-lg text-primary hover:text-primary-dark transition-colors duration-200"
        >
          Services
        </a>
        <a
          href={contact}
          className="font-semibold text-lg text-primary hover:text-primary-dark transition-colors duration-200"
        >
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-primary focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <a
            href={home}
            className="font-semibold text-lg text-gray-700 hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href={about}
            className="font-semibold text-lg text-primary hover:text-primary-dark transition-colors"
          >
            About
          </a>
          <a
            href={services}
            className="font-semibold text-lg text-primary hover:text-primary-dark transition-colors"
          >
            Services
          </a>
          <a
            href={contact}
            className="font-semibold text-lg text-primary hover:text-primary-dark transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
