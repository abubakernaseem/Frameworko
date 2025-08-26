import React from "react";
import assets from "../assets/assets.js";
import Title from "./Title"; // Make sure the path is correct
import ServiceCard from "./ServiceCard"; // Make sure you have this component
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Website Design & Development",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Custom Website Design & Development</li>
          <li>Responsive & Mobile-Friendly Design</li>
        </ul>
      ),
      icon: assets.ads_icon,
    },
    {
      title: "E-Commerce Solutions",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Online Stores & Secure Payment Integration</li>
          <li>SEO & Marketing Integration</li>
        </ul>
      ),
      icon: assets.marketing_icon,
    },
    {
      title: "UI/UX & Optimization",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>UI/UX Design</li>
          <li>SEO & Speed Optimization</li>
        </ul>
      ),
      icon: assets.content_icon,
    },
    {
      title: "Support & Maintenance",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Website Maintenance & Ongoing Support</li>
          <li>Hosting & Server Management</li>
        </ul>
      ),
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
