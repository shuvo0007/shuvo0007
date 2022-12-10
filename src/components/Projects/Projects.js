import { Card } from "flowbite-react";
import React from "react";
import laptop from "../img/laptop.png";
import review from "../img/review.png";
import education from "../img/education.png";

const Projects = () => {
  return (
    <div className="text-left">
      Projects
      <div className="flex flex-wrap my-10 ">
        <div className="max-w-sm rounded-xl text-left mx-5 ">
          <Card className="bg-transparent">
            <img className="rounded-xl w-96 h-64" src={laptop} alt="" />
            <h5 className="font-bold tracking-tight text-white dark:text-white mt-5">
              Apnader laptop
            </h5>
            <div className="h-96 mb-5 ">
              <p className="font-normal text-gray-400 dark:text-white text-xl mt-5 text-justify">
                <span className="text-2xl text-white ">Details:</span>
                <li>This is a Resaler Website</li>
                <li>
                  Three types of users can use this site. (Admin, Seller, Buyer)
                </li>
                <li>
                  Admin can manage all buyers’ and sellers’ info as well as all
                  the products.
                </li>
                <li>
                  Sellers can post their products and can advertise products.
                </li>
                <li>Buyers can buy product using</li>
              </p>
              <p className="text-gray-400 text-xl my-5">
                <span className="text-2xl  text-white">Technologies:</span>
                <ul>
                  <li>
                    ReactJS, TailwindCSS, NodeJS, Vercel, Firebase, Google
                    Authentication, Github
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <a
                href="https://e-commerce-site-43e68.web.app/"
                target="blank"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Project
                </span>
              </a>
            </div>
          </Card>
        </div>
        <div className="max-w-sm rounded-xl text-left mx-5 ">
          <Card className="bg-transparent">
            <img className="rounded-xl w-96 h-64" src={review} alt="" />
            <h5 className="font-bold tracking-tight text-white dark:text-white mt-5">
              TutionBD
            </h5>
            <div className="h-96 mb-5">
              <p className="font-normal text-gray-400 dark:text-white text-xl mt-5 text-justify">
                <span className="text-2xl text-white">Details:</span>
                <li>This is a Review Website</li>
                <li>User can add courses. </li>
                <li>User can give review in all courses.</li>
                <li>User can delete their reviews.</li>
              </p>
              <p className="text-gray-400 text-xl my-5">
                <span className="text-2xl  text-white">Technologies:</span>
                <ul>
                  <li>
                    ReactJS, TailwindCSS, NodeJS, Vercel, Firebase, Google
                    Authentication, Github
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <a
                href="https://tution-bd.web.app/"
                target="blank"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Project
                </span>
              </a>
            </div>
          </Card>
        </div>
        <div className="max-w-sm rounded-xl text-left mx-5 ">
          <Card className="bg-transparent">
            <img className="rounded-xl w-96 h-64" src={education} alt="" />
            <h5 className="font-bold tracking-tight text-white dark:text-white mt-5">
              Digital Education
            </h5>
            <div className="h-96 mb-5">
              <p className="font-normal text-gray-400 dark:text-white text-xl mt-5 text-justify">
                <span className="text-2xl text-white">Details:</span>
                <li>This is an Educational Wesite.</li>
                <li>User can choose courses from the category.</li>
                <li>User can see the course details from the list.</li>
                <li>User can buy the courses.</li>
              </p>
              <p className="text-gray-400 text-xl my-5">
                <span className="text-2xl  text-white">Technologies:</span>
                <ul>
                  <li>
                    ReactJS, TailwindCSS, NodeJS, Vercel, Firebase, Google
                    Authentication, Github
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <a
                href="https://digital-educations.web.app/"
                target="blank"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Project
                </span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
