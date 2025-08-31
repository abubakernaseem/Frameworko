import React from "react";
import Title from "./Title";
import assets from "../assets/assets.js";
import { motion } from "framer-motion"; // fixed import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const workData = [
  {
    title: "Aihostingo",
    description:
      "Hosting automation platform with WordPress, WHMCS, PHP. Integrated with cPanel, MySQL and Payment Gateways to provide end-to-end hosting services.",
    image: assets.aihostingo,
  },
  {
    title: "Matlay",
    description:
      "Business website built on WordPress + PHP with MySQL database for dynamic content management for a company providing crypto and digital solutions.",
    image: assets.matlay,
  },
  {
    title: "TheUnityWealth",
    description:
      "A financial platform using Laravel + MySQL with APIs, Payment Gateways and Email SMTP integration for secure online transactions. it's a complete MLM sytems",
    image: assets.theunitywealth,
  },
  {
    title: "NIMS",
    description:
      "A modern web application with Node.js backend, React.js frontend and Bootstrap UI for responsive design. They create and launch a nims coins on blockchain.",
    image: assets.nims,
  },
  {
    title: "BlueID",
    description:
      "Enterprise-grade solution in IBM using Java, JSP, Angular, REST APIs, deployed on Linux servers connected with MySQL. We provide middleware services.",
    image: assets.blueid,
  },
  {
    title: "Flahnaser",
    description:
      "Portfolio/landing site for a construction Company in KSA using HTML5, Bootstrap, PHP, JavaScript for lightweight deployment to showcase their services.",
    image: assets.flahnaser,
  },
  {
    title: "Rabaat",
    description:
      "Multi-technology stack project using Node.js, React.js, Vue.js, TailwindCSS for scalable full-stack solutions. They brought a new idea to provide discounts/deals on bank cards.",
    image: assets.rabaat,
  },
  {
    title: "Allied Bank Limited",
    description:
      "Worked with Python + Hive DB + Graph API for financial data management and reporting. They want to develop a system to use their social media data for analytics purpose.",
    image: assets.abl,
  },
  {
    title: "Lahore Times Square",
    description:
      "Business solutions using MS365, PowerApps, PowerBI and MSAdmin Center for automation and data insights. We help them to utilize Microsoft services to enhance their system.",
    image: assets.lts,
  },
  {
    title: "IAC",
    description:
      "Educational website project using Node.js + Vue.js + Tailwind + MySQL with a focus on lightweight scalable architecture. for their Admin and students to connect with each other.",
    image: assets.iac,
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

      {/* Slider Section */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-6xl !pb-10"
      >
        {workData.map((work, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="hover:scale-105 transition-all duration-500 cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full rounded-xl"
              />
              <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
              <p className="text-sm opacity-60">{work.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default OurWork;
