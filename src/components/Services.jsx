import React from "react";
import assets from "../assets/assets.js";
import Title from "./Title"; // Make sure the path is correct
import ServiceCard from "./ServiceCard"; // Make sure you have this component
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="relative flex flex-col items-center gap-7 
                 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 
                 text-gray-700 dark:text-white"
    >
      {/* Background Image */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-28 -left-16 -z-10 dark:hidden"
      />

      {/* Section Title */}
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      {/* Services Grid */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 w-full">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;