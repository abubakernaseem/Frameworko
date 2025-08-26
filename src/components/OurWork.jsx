import React from "react";
import Title from "./Title";
import assets from "../assets/assets.js";
import { motion } from "motion/react";

const workData = [
  {
    title: "Website Development",
    description:
      "We design responsive, modern, and user-friendly websites that elevate your online presence.Our focus is on speed, security, and seamless user experience.",
    image: assets.work_mobile_app,
  },
  {
    title: "Application Development",
    description: "We build scalable, custom applications that bring your ideas to life.From concept to launch, we ensure performance and innovation.",
    image: assets.work_dashboard_management,
  },
  {
    title: "Social Media Marketing",
    description: "We grow your brand with engaging social media campaigns.Our strategies connect you with the right audience at the right time.",
    image: assets.work_fitness_app,
  },
];

const OurWork = () => {
  return (
    <motion.div
      id="our-work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 
                 pt-32 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;