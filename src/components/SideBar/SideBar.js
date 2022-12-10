import React from 'react';
import myPic from "../img/formalpic300.jpg";
import { CiHome, CiMail } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const SideBar = () => {
  return (
    <div>
      <div class="bg-black h-screen fixed">
          {/* image section  */}
          <div class="p-12 flex flex-col items-center">
            <img className="rounded-full w-52 " src={myPic} alt="" />
            <h1 className="pt-5 text-3xl">Md. Samiul Islam</h1>
          </div>
          {/* button section  */}
          <div className="flex flex-col items-center text-xl">
            <ul className="">
              <li className="pt-4">
                <a href="#home" className="flex items-center">
                  <CiHome size={25} />
                  <span className="pl-2">Home</span>
                </a>
              </li>
              <li className="pt-4">
                <a href="#projects" className="flex items-center">
                  <AiOutlineFundProjectionScreen size={25} />
                  <span className="pl-2">Projects</span>
                </a>
              </li>
              <li className="pt-4">
                <a href="#contact" className="flex items-center">
                  <CiMail size={25} />
                  <span className="pl-2">Contact Me</span>
                </a>
              </li>
              <li className="pt-4">
                <a href="#about" className="flex items-center">
                  <CiMail size={25} />
                  <span className="pl-2">About Me</span>
                </a>
              </li>
            </ul>
          </div>
          {/* social media section  */}
          <div className="flex h-96  items-end justify-evenly pb-10">
            <a
              className=""
              href="https://www.facebook.com/shuvo.spyboy007"
              target="black"
            >
              <BsFacebook size={30} />
            </a>
            <a className="" href="https://github.com/shuvo0007" target="black">
              <BsGithub size={30} />
            </a>
            <a
              className=""
              href="https://www.linkedin.com/in/samiul-islam-shuvo-025210126/"
              target="black"
            >
              <BsLinkedin size={30} />
            </a>
          </div>
        </div>
    </div>
  );
};

export default SideBar;