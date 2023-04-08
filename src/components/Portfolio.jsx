import React from "react";
import reactParallex from "../assets/portfolios/reactParallax.jpg";
import reactSmooth from "../assets/portfolios/reactSmooth.jpg";
import reactWeather from "../assets/portfolios/reactWeather.jpg";
import campground from "../assets/portfolios/campground.png";
import notedown from "../assets/portfolios/notedown.png";
import tenzies from "../assets/portfolios/tenzies.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactParallex,
    },
    {
      id: 2,
      src: reactSmooth,
    },
    {
      id: 3,
      src: reactWeather,
    },
    {
      id: 4,
      src: campground,
    },
    {
      id: 5,
      src: notedown,
    },
    {
      id: 6,
      src: tenzies,
    },
  ];

  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-blue-950 w-full text-white md:h-screen pb-5 pt-12"
      >
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                />

                <div className=" flex items-center justify-around">
                  <button className="w-1/2 px-6 py-3 m-4 mx-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer hover:scale-105 duration-300">
                    Demo
                  </button>
                  <p className="text-5xl text-blue-400">|</p>
                  <button className="w-1/2 px-6 py-3 m-4 mx-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer hover:scale-105 duration-300">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
