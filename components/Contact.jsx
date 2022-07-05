import React, { useState } from "react";

import Link from "next/link";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = () => {
  //   setName("");
  //   setPhone("");
  //   setEmail("");
  //   setSubject("");
  //   setMessage("");
  //   window.open(
  //     "mailto:enrique.morango04@outlook.com?subject=" +
  //       { subject } +
  //       "&body=" +
  //       { message }
  //   );
  // };

  return (
    <div
      id="contact"
      className="w-[440px] nxs:w-full lg:h-screen justify-center items-center align-middle"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="py-4 uppercase  text-2xl tracking-widest  text-[#039898]">
          Contact
        </p>
        <h2 className="py-4">Let&apos;s get in touch!</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-5 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="">
                {/* <img
                  className="rounded-xl hover:scale-110 ease duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="/"
                /> */}
              </div>
              <div>
                <h2 className="py-2">Enrique Moran Garrido</h2>
                <p className="italic text-[#039898]">Mechatronics Engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <p className="uppercase pt-8 pb-4">Connect With Me</p>
              <div className="">
                <div className="flex items-center justify-between max-w-[500px] m-auto py-4">
                  <a href="https://www.linkedin.com/in/enrique-moran-garrido">
                    <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                      <FaLinkedin size={25} />
                    </div>
                  </a>
                  <a href="https://github.com/EnriqueMoranGarrido">
                    <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                      <FaGithub size={25} />
                    </div>
                  </a>
                  <Link href="/#contact">
                    <div
                      className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] "
                      onClick={() => {
                        window.open(
                          "mailto:enrique.morango04@outlook.com?subject=Subject&body=Body%20goes%20here"
                        );
                      }}
                    >
                      <AiOutlineMail size={25} />
                    </div>
                  </Link>
                  <Link href="/#resume">
                    <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                      <BsFillPersonLinesFill size={25} />
                    </div>
                  </Link>
                  <a href="https://twitter.com/ImMythic2">
                    <div className=" rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#039898] ">
                      <FaTwitter size={25} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          {/* <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                onSubmit={handleSubmit}
                // action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                // method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#039898]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
