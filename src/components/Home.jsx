import React from "react";
import heroImg from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-sky-950 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I graduated from BCA and am currently learning full-stack web
            development through online tutorials & docs.
          </p>
          <p className="text-gray-500 pb-4 max-w-md">
            I have gained experience with React, Bootstrap, Node.js, Express and
            MongoDB and am committed to enhancing my skills in this field.
          </p>
          <div>
            <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer hover:scale-105 duration-300 ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={heroImg}
            alt="my dp"
            className="rounded-3xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;