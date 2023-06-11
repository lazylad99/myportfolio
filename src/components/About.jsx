import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-blue-950 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About Me
          </p>
        </div>

        <p className=" text-xl mt-10 ">
          During my graduation, I discovered my passion for programming through
          languages like C, C++, and Java. Afterward, I dived into web
          development by taking a comprehensive full-stack development course on
          Udemy. This allowed me to learn HTML, CSS, JavaScript, EJS, Node, and
          Mongoose, providing a solid foundation in web technologies. To further
          enhance my skills, I decided to explore React, a popular and
          resource-rich framework. By learning React and the MERN stack
          (MongoDB, Express, React, Node.js), I developed several projects that
          strengthened my problem-solving abilities and honed my web development
          expertise.
        </p>

        <br />

        <p className=" text-xl">
          These projects allowed me to apply my knowledge, improve my
          problem-solving abilities, and gain hands-on experience in building
          robust web applications. Now, I am venturing into the world of
          freelancing, leveraging my skills and experience to create
          high-quality web solutions for clients. I am excited about the
          prospect of collaborating with individuals and organizations to bring
          their ideas to life and deliver exceptional digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
