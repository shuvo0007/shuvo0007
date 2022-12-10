import React from "react";
import myImg from "../img/formalpic300.jpg";

const Header = () => {
  return (
    <div className="bg-from-ph p-5">
      <div class="flex flex-wrap ">
        <div class="w-6/12 px-4 border-red-500">
          <img
            src="https://images.cooltext.com/5633440.png"
            alt="ProfilePicture"
            class="shadow rounded-full w-20 h-auto align-middle border-none float-left"
          />
        </div>
        <div className="w-6/12 flex items-center justify-end md:pr-32">
          <a
            href="/"
            className="text-violet-400 border border-violet-400 hover:bg-violet-400 hover:text-white active:bg-violet-400 font-bold uppercase text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-xl"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
// #231143
