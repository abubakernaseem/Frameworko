import React from 'react';
import { toast } from 'react-hot-toast';
import assets from '../assets/assets.js';
import Title from './Title';
import { motion } from "motion/react";

const ContactUs = () => {
  const onSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    demoName: event.target.name.value,
    category: "Website Inquiry", // or map a field
    pages: "N/A",                // or map a field
    description: event.target.message.value,
    email: event.target.email.value
  };

  try {
    const response = await fetch("http://localhost:5000/request-demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.ok) {
      toast.success("Thank you for your submission!");
      event.target.reset();
    } else {
      toast.error(data.error || "Submission failed!");
    }
  } catch (error) {
    toast.error(error.message || "Something went wrong!");
  }
};


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full mt-6"
      >
        {/* Name */}
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="Person icon" className="w-5 h-5 mr-2" />
            <input
              name="name"
              type="text"
              aria-label="Your name"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none bg-transparent dark:text-white"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="mb-2 text-sm font-medium">Email</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="Email icon" className="w-5 h-5 mr-2" />
            <input
              name="email"
              type="email"
              aria-label="Your email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none bg-transparent dark:text-white"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={6}
            aria-label="Your message"
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
            required
          />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 flex justify-start">
          <button
            type="submit"
            aria-label="Submit contact form"
            className="w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
          >
            Submit
            <img src={assets.arrow_icon} alt="Arrow icon" className="w-4" />
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
