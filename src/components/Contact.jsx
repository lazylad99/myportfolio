import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full p-4 h-screen bg-gradient-to-b from-black to-blue-950 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
          <p className=" text-4xl inline border-b-4 border-gray-500 font-bold">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e5b22ab0-9fdb-4776-99a9-513d01c23789"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              id=""
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              id=""
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="w-fit px-6 py-3 my-8 text-white mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer hover:scale-105 duration-300">
              Let's Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
