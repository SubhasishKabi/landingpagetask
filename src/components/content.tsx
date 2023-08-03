/* eslint-disable @next/next/no-img-element */
import React from "react";

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Welcome to InnovateX Solutions
          </h1>
          <p className="lg:w-2/3 w-full leading-relaxed text-gray-500">
            At InnovateX Solutions, we are more than just a company - we are a
            catalyst for innovation, a hub for creativity, and a community
            passionate about shaping the future.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4 flex">
            <div className="border border-gray-300 p-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 w-full">
              <div className="w-16 h-16 mb-4 rounded-full inline-block border-2 border-indigo-100 bg-indigo-300">
                <img
                  alt="Innovative Solutions"
                  className="w-full h-full object-cover rounded-full"
                  src="https://media.istockphoto.com/id/1299755243/vector/creative-idea-line-icon-lump-with-gear-icon-brain-in-lightbulb-vector-illustration-thin-sign.jpg?s=612x612&w=0&k=20&c=CaqnVEqz2RqzbqoEGhU8UBFMTBGWHa1zROXrtTtlH_I="
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Innovative Solutions
              </h2>
              <p className="leading-relaxed text-base">
                We are driven by a passion for innovation. Our solutions bridge
                gaps, solve challenges, and bring revolutionary ideas to life.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4 flex">
            <div className="border border-gray-300 p-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 w-full">
              <div className="w-16 h-16 mb-4 rounded-full inline-block border-2 border-indigo-100 bg-indigo-300">
                <img
                  alt="Core Values"
                  className="w-full h-full object-cover rounded-full"
                  src="https://media.istockphoto.com/id/1154691032/photo/ladder-career-path-for-business-growth-success-process-concept-wood-block-stacking-as-step.jpg?s=612x612&w=0&k=20&c=8etblEgpzDoYqD3_7gZrjZ6w4tDqR5yONT0kaKhI46g="
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Core Values
              </h2>
              <p className="leading-relaxed text-base">
                Our values of creativity, collaboration, and integrity guide us
                in every project. We believe in making a positive impact while
                embracing diversity.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4 flex">
            <div className="border border-gray-300 p-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 w-full">
              <div className="w-16 h-16 mb-4 rounded-full inline-block border-2 border-indigo-100 bg-indigo-300">
                <img
                  alt="Our Mission"
                  className="w-full h-full object-cover rounded-full"
                  src="https://media.istockphoto.com/id/1322842973/photo/diverse-business-people-putting-their-hands-together-in-cirle.jpg?s=612x612&w=0&k=20&c=9BAYCv8tAsgYPQdTsFxLzLJsmt6tGYE5Etwd63OccxQ="
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Our Mission
              </h2>
              <p className="leading-relaxed text-base">
                Our mission is to empower businesses and individuals with
                cutting-edge solutions that drive progress. We are dedicated to
                shaping a brighter future through technology and innovation.
              </p>
            </div>
          </div>

          <div className="xl:w-1/4 md:w-1/2 p-4 flex">
            <div className="border border-gray-300 p-6 rounded-lg shadow-md transition transform hover:scale-105 duration-300 w-full">
              <div className="w-16 h-16 mb-4 rounded-full inline-block border-2 border-indigo-100 bg-indigo-300">
                <img
                  alt="Data Security"
                  className="w-full h-full object-cover rounded-full"
                  src="https://media.istockphoto.com/id/901609212/photo/press-enter-button-on-the-keyboard-computer-shield-cyber-key-lock-security-system-abstract.jpg?s=612x612&w=0&k=20&c=zWfKh2HC0yUNrX-8IWCdTquoub4KqWSjISfwcCLX-Ks="
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Data Security
              </h2>
              <p className="leading-relaxed text-base">
                Our Data Security service ensures that your sensitive
                information stays protected. We implement advanced encryption
                and security measures to safeguard your data from unauthorized
                access.
              </p>
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Content;
