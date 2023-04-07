import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      color: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "css",
      color: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      color: "shadow-yellow-500",
    },
    {
      id: 4,
      src: node,
      title: "node",
      color: "shadow-green-700",
    },
    {
      id: 5,
      src: express,
      title: "express",
      color: "shadow-gray-400",
    },
    {
      id: 6,
      src: mongodb,
      title: "mongoDB",
      color: "shadow-green-500",
    },
    {
      id: 7,
      src: bootstrap,
      title: "bootstrap",
      color: "shadow-purple-500",
    },

    {
      id: 8,
      src: react,
      title: "react",
      color: "shadow-sky-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "tailwind",
      color: "shadow-cyan-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-blue-950 to-black w-full h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0 sm:py">
          {technologies.map(({ id, src, title, color }) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center shadow-md ${color} rounded-lg hover:scale-105 duration-500 py-2`}
            >
              <img className="w-20 mx-auto" src={src} alt="" />
              <p className="mt-4 capitalize">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
