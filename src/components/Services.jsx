import React from "react";
import assets from "../assets/assets.js";
import Title from "./Title"; // Make sure the path is correct
import ServiceCard from "./ServiceCard"; // Make sure you have this component
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Website Development",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>From responsive sites to advanced web platforms, we blend creativity and technology to deliver websites that are visually stunning, functional and future-ready.</li>
        </ul>
      ),
      icon: assets.ads_icon,
    },
    {
      title: "E-commerce Development",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Build secure, scalable, and feature-packed online stores with us. Optimized for smooth checkouts, flexible payments and maximum conversions for every business.</li>
        </ul>
      ),
      icon: assets.marketing_icon,
    },
    {
      title: "UI/UX & Optimization",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Our team creates intuitive, user-centric interfaces. Minimal complexity, maximum engagement ensuring every interaction from front-end is seamless and delightful.</li>
        </ul>
      ),
      icon: assets.content_icon,
    },
    {
      title: "Mobile App Development",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>We craft sleek, high-performance mobile apps tailored to your business. Using frameworks like React Native and Ionic, we deliver solutions that engage users and accelerate growth.</li>
        </ul>
      ),
      icon: assets.mobileapp_icon,
    },
    {
      title: "Digital Marketing",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>We deliver result-driven digital marketing campaigns. From SEO and content marketing to PPC and social media, we help your brand reach the right audience and boost ROI.</li>
        </ul>
      ),
      icon: assets.difitalmarketing_icon,
    },
    {
      title: "Support & Maintenance",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>We provide reliable, proactive support and maintenance for your digital solutions. We ensure your apps, websites, and software run flawlessly so you can focus on growing your business.</li>
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
