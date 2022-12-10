import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ContactMe from "../ContactMe/ContactMe";
import SideBar from "../SideBar/SideBar";
import Projects from "../Projects/Projects";
import About from "../About/About";

const Main = () => {
  return (
    <div className="relative flex ">
      {/* side nav bar  */}
      <div className="w-3/12">
        <SideBar />
      </div>

      {/* main div  */}
      <div className="text-4xl w-9/12 mb-10">
        {/* top banner  */}
        <div
          id="home"
          className=" flex flex-col items-start justify-center h-screen "
        >
          <h1 className="font-extrabold text-violet-500">
            Hi, I am{" "}
            <span className="text-white">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Md. Samiul Islam", "a Web Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <h2 className="text-violet-500 text-2xl my-10">
            <Typewriter
              words={[
                "I design and code beautifully simple things, and I love what I do.",
              ]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000000}
            />
          </h2>
          <a
            href="https://drive.google.com/file/d/1sVZJnrjtElFCI82HgsXojTgU1M76bjE1/view?usp=share_link"
            target="blank"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md text-white group-hover:bg-opacity-0 hover:text-white">
              View My Resume
            </span>
          </a>
        </div>

        {/* projects  */}

        <div id="projects" className="flex">
          <Projects></Projects>
        </div>

        {/* contact me banner */}
        <div id="contact" className="flex">
          <ContactMe></ContactMe>
        </div>

        {/* About me  */}
        <div id="about" className="flex">
          <About></About>
        </div>
      </div>
    </div>
  );
};

export default Main;
