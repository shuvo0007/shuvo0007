import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_czh9r5j",
        "template_oc75dui",
        form.current,
        "4vaqmfLDi2HiOat1Q"
      )
      .then(
        (result) => {
          toast.success("Email Send", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Something Went Wrong", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  return (
    <div className="h-screen w-full mt-24 mr-36">
      <h2 className="flex  text-6xl text-purple-500">Contact me</h2>

      <div className="mt-5 p-16 shadow-xl  shadow-indigo-500/50">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col">
            {/* name and email */}
            <div className="flex my-5">
              {/* name  */}
              <div className="flex items-center w-1/2">
                <label className="mx-5">Name:</label>
                <input
                  required
                  className="rounded-xl  bg-transparent text-2xl w-full"
                  type="text"
                  name="user_name"
                />
              </div>
              {/* email */}
              <div className="flex items-center w-1/2">
                <label className="mx-5">Email:</label>
                <input
                  required
                  className="rounded-xl bg-transparent text-2xl w-full"
                  type="email"
                  name="user_email"
                />
              </div>
            </div>

            {/* massage  */}
            <div className="my-5 flex items-center">
              <label className="mx-5">Message:</label>
              <textarea
                required
                className="rounded-xl bg-transparent text-2xl w-full h-48 "
                name="message"
              />
            </div>

            {/* submit button  */}
            <div className="pt-5">
              <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-3xl px-10 py-5 text-center mr-2 mb-2">
                <input type="submit" value="" />
                Send
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
