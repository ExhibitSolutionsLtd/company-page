import React from "react";

const AnotherCTA = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center mb-8"
      style={{
        backgroundImage: "url('/assets/people.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-5xl sm:text-3xl font-semibold">
          You Dream <br /> We Actualize
        </h1>
      </div>
    </section>
  );
};

export default AnotherCTA;
