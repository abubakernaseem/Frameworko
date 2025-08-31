import React from 'react';
import assets from '../assets/assets.js';
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-800 dark:text-gray-300"
        >
          <img
            src={theme === 'dark' ? assets.logo : assets.logo_dark}
            className="w-32 sm:w-44"
            alt="GreatStack Logo"
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">Home</a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">Services</a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-work">Our Work</a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Contact Us</h3>

          <p className="text-sm mt-2 mb-6">
            support@frameworko.com
          </p>
          <p className="text-sm mt-2 mb-6">
            <a href="tel:+96598996030">+965 98996030</a>
          </p>
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Add your subscribe logic here
            }}
            className="flex gap-2 text-sm"
          >
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded bg-transparent dark:text-gray-200 border border-gray-300 dark:border-gray-600"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="bg-primary text-white rounded px-6"
            >
              Subscribe
            </button>
          </form> */}
        </motion.div>
        
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2025 frameworko - All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            className="hover:scale-110 transition-transform"
          />
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            className="hover:scale-110 transition-transform"
          />
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            className="hover:scale-110 transition-transform"
          />
          <img
            src={assets.linkedin_icon}
            alt="LinkedIn"
            className="hover:scale-110 transition-transform"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;