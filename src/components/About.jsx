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
            About
          </p>
        </div>

        <p className=" text-xl mt-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corporis odit natus ipsa commodi maiores modi laboriosam libero
          suscipit. Ipsa eveniet perferendis iste dicta quidem autem tempora
          voluptate numquam, facilis nisi veritatis vero laudantium error qui
          repellat. Error quod exercitationem debitis, id maiores harum fugiat
          nihil quos laboriosam nobis. Sed?
        </p>

        <br />

        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab
          recusandae ducimus veniam odio alias porro iure atque molestiae quidem
          temporibus nemo eos repudiandae officia est quia tempora explicabo
          deserunt, et autem. Voluptate distinctio beatae facilis temporibus
          nisi, autem possimus ratione, iusto fuga, rem odio natus illo expedita
          rerum itaque?
        </p>
      </div>
    </div>
  );
};

export default About;
