import React from "react";
import heroImg from "../assets/dg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import "../App.css";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-950 text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-evenly h-full px-4 md:flex-row">
        <div className="flex flex-col container justify-center h-full">
          <h2 className="text-2xl sm:text-4xl sm:mt-3 sm:pb-0 font-bold ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Alok.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Embarking on the journey to become a Full Stack Web Developer."
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "En route to becoming a proficient React Developer."
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcome To My Portfolio.")
                  .start();
              }}
            />
          </h2>
          <p className="text-gray-500 py-4 text-lg max-w-md">
            I graduated from BCA and am currently learning full-stack web
            development through online tutorials & docs.
          </p>
          <p className="text-gray-500 pb-2 text-lg max-w-md">
            I have gained experience with React, Bootstrap, Node.js, Express and
            MongoDB and am committed to enhancing my skills in this field.
          </p>

          <div>
            <Link
              to="portfolio"
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer hover:scale-105 duration-300 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>

        <div className="container sm:mt-0" style={{ marginTop: "20px" }}>
          <figure className="wave">
            <img
              src={heroImg}
              alt="my dp"
              className="rounded-3xl mx-auto w-2/3 md:w-full"
            ></img>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
