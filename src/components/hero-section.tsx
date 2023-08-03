import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative text-gray-600 body-font h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-full text-center relative z-10">
        <h1 className="title-font sm:text-5xl text-4xl mb-4 text-white font-extrabold animate-fade-in">
          Transforming Ideas
          <br />
          Into Reality
        </h1>
        <p className="mb-8 leading-relaxed text-white animate-fade-in">
          We are a creative powerhouse specializing in turning innovative
          concepts into stunning solutions. Lets shape the future together.
        </p>
        <div className="flex justify-center animate-fade-in">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
