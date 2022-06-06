import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto flex p-2 justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5e9ec5]"> Enrique</span>
          </h1>
          <h2 className="py-4 text-gray-500 italic">A Mechatronics Engineer</h2>
          <p className="py-4 text-gray-600 max-w-[60%] m-auto text-xl">
            {" "}
            I am passionate for technology and have recently started my journey
            as a software developer. Currently I'm focused on building learning
            how to build and design full-stack applications and industrial
            automation systems.
          </p>
          <div className="sm:max-w-[60%] text-center items-center m-auto">
            <p className="py-4 mt-2  text-bold text-lg italic">
              Graduado en ingeniería desde hace media año,
            </p>
            <span className="text-[#5192ba] text-bold text-lg italic">
              {" "}
              siendo ingeniero de corazón toda la vida.
            </span>
          </div>

          <div className="flex items-center justify-between max-w-[500px] m-auto py-4">
            <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin size={25} />
            </div>
            <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub size={25} />
            </div>
            <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={25} />
            </div>
            <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill size={25} />
            </div>
            <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaTwitter size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;