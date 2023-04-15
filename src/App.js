import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import imgHeader from "./img/header.png";

const App = () => {
  AOS.init();

  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const config = {
      Username: process.env.REACT_APP_USER_NAME,
      Password: process.env.REACT_APP_PASSWORD,
      Host: process.env.REACT_APP_HOST_SMTP,
      Port: process.env.REACT_APP_PORT_SMTP,
      From: process.env.REACT_APP_FROM,
      // To: "canva2804@gmail.com",
      To: "thanhnghi.vo@kepland.com.vn",
      Subject: "[Contact Us] " + formState.subject + " - " + formState.name,
      Body: `Hello, <br><br>
      You got message from ${formState.name} , email: ${formState.email}: <br><br> ${formState.message} <br><br> Best wishes,`,
    };

    if (window.Email) {
      window.Email.send(config).then((message) => {
        if (message === "OK") {
          toast.success("Successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error("Error!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
    }
  };

  return (
    <div className=" bg-gray-900 h-full w-full items-center justify-center">
      <div className>
        <div className="w-full h-10 z-0">
          <img src={imgHeader} alt="" className="object-cover h-60 w-full" />
        </div>
        <h2 className="pt-8 mb-4 text-5xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 font-light text-center text-white sm:text-xl">
          Have an idea? Tell us about ...
        </p>
      </div>
      <div className="flex justify-center ">
        <div className="bg-gray-800  border-2 flex-1 py-8 px-8 mx-4 max-w-screen-md border-gray-500 rounded-lg">
          <form className="space-y-8" onSubmit={handleSubmitForm}>
            <div className="flex-col flex w-full justify-between sm:flex-row">
              <div className="flex-1 sm:mr-4">
                <label for="name" className="block mb-2 text-lg font-medium text-gray-300">
                  Your name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="border text-gray-300 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600  focus:outline-none  focus:border-primary-500 focus:bg-gray-700  transition"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="flex-1 mt-8 sm:mt-0">
                <label for="email" className="block mb-2 text-lg font-medium text-gray-300">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  className="border text-gray-300 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600  focus:outline-none  focus:border-primary-500 transition "
                  placeholder="your_email@gmail.com"
                  required
                />
              </div>
            </div>
            <div>
              <label for="subject" className="block mb-2 text-lg font-medium text-gray-300">
                Subject
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="subject"
                className="border text-gray-300 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600  focus:outline-none  focus:border-primary-500  transition"
                placeholder="Subject"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" className="block mb-2 text-lg font-medium text-gray-300">
                Your message
              </label>
              <textarea
                onChange={handleChange}
                name="message"
                rows="6"
                className="border text-gray-300 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600  focus:outline-none  focus:border-primary-500 transition"
                placeholder="Leave a message..."
                required
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="py-3 px-10 text-sm font-medium text-center text-white rounded-lg bg-[#94081f] hover:bg-[#c83049] hover:text-[#000000] focus:outline-none transition duration-500  items-center w-full sm:w-fit "
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
      <div className="mt-20 flex w-full justify-center bg-gray-800">
        <div className="flex-1 flex justify-between max-w-screen-lg py-10 flex-col sm:flex-row px-4">
          <div className="flex flex-col items-center pb-10  sm:pb-0">
            <div className="p-6 bg-gray-700 rounded-xl w-fit cursor-pointer hover:bg-[#94081f] transition duration-500 ">
              <HiOutlineMail className="text-gray-300 text-2xl" />
            </div>
            <h3 className="text-white text-center mt-4 font-extrabold text-lg">Email</h3>
            <a href="/" className="mt-2 text-gray-500 hover:text-gray-300 cursor-pointer sm:mt-4">
              example@company.com
            </a>
          </div>
          <div className="flex flex-col items-center pb-10 sm:pb-0">
            <div className="p-6 bg-gray-700 rounded-xl w-fit cursor-pointer hover:bg-[#94081f] transition duration-500  ">
              <a href="/">
                <ImPhone className="text-gray-300 text-2xl" />
              </a>
            </div>
            <h3 className="text-white text-center mt-4 font-extrabold text-lg">Phone</h3>
            <a href="/" className="mt-2 text-gray-500 hover:text-gray-300 cursor-pointer sm:mt-4">
              +84 123456789
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 bg-gray-700 rounded-xl w-fit cursor-pointer hover:bg-[#94081f] transition duration-500 ">
              <BiSupport className="text-gray-300 text-2xl " />
            </div>
            <h3 className="text-white text-center mt-4 font-extrabold text-lg">Support</h3>
            <button className="text-gray-500 border p-2 rounded-lg mt-2 border-[#94081f] hover:bg-[#94081f] transition duration-500  hover:text-gray-300">
              Support Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
