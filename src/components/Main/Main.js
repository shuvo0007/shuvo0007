import React from "react";
import { Typewriter } from "react-simple-typewriter";
import myPic from "../img/formalpic300.jpg";

const Main = () => {
  return (
    <div className="">
      <div className="text-4xl flex ">
        <img className="rounded-full ml-12" src={myPic} alt="" />
        <div className="flex items-center md:ml-10">
          <div className="flex flex-col items-start">
            <h1 className="font-extrabold text-violet-500">
              Hi, I am{" "}
              <span className="text-white">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Md. Samiul Islam", "a Web Developer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={120}
                  delaySpeed={1100}
                />
              </span>
            </h1>
            <h2 className="text-violet-500 text-2xl">
              I design and code beautifully simple things, and I love what I do.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
