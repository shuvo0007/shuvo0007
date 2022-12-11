import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiCheck, HiX } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";

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
          toast.success("🦄 Wow so easy!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          console.log("email not send");
        }
      );
  };

  return (
    <div>
      <h2 className="flex">Contact me</h2>

      <div className=" px-20 py-10">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col items-start">
            {/* name and email */}
            <div className="flex my-5">
              {/* name  */}
              <div className="flex items-center">
                <label className="mx-5">Name:</label>
                <input
                  className="rounded-xl w-96 bg-transparent text-2xl"
                  type="text"
                  name="user_name"
                />
              </div>
              {/* email */}
              <div className="flex items-center">
                <label className="mx-5">Email:</label>
                <input
                  className="rounded-xl w-96 bg-transparent text-2xl"
                  type="email"
                  name="user_email"
                />
              </div>
            </div>

            {/* massage  */}
            <div className="my-5 flex items-center">
              <label className="mx-5">Message:</label>
              <textarea
                className="rounded-xl bg-transparent text-2xl min-w-full min-h-full overflow-y-scroll"
                name="message"
              />
            </div>

            {/* submit button  */}
            <div>
              <button>
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
