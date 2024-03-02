"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPgae = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello!";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className=" h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className=" h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👨🏼‍💻
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={(e) => sendEmail(e)}
          ref={form}
          className=" h-1/2 lg:h-full lg:w-1/2 bg-red-100  flex flex-col gap-8 justify-center p-24 rounded-xl text-xl"
        >
          <span>Dear Shubham,</span>
          <textarea
            rows={4}
            type="message"
            required
            name="user_message"
            className=" bg-transparent border-b-2 border-black outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            type="email"
            required
            name="user_email"
            className=" bg-transparent border-b-2 border-black outline-none"
          />
          <span>My name is:</span>
          <input
            type="text"
            required
            name="user_name"
            className=" bg-transparent border-b-2 border-black outline-none"
          />
          <span>Grow up together!</span>
          <button
            type="submit"
            className=" bg-purple-300 rounded font-semibold text-gray-700 p-4"
          >
            Send
          </button>
          {success && (
            <span className=" text-green-500 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className=" text-red-500 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPgae;
