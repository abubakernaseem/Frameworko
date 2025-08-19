import React, { useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [hoverX, setHoverX] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setHoverX(x / rect.width); // normalized 0 → 1
  };

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  // Calculate gradient position (0% → 100%)
  const gradientPosition = Math.floor(hoverX * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl 
                 shadow-2xl shadow-gray-100 dark:shadow-white/10 transition-all"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic border overlay */}
      {isHover && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: "2px solid transparent",
            background: `linear-gradient(to right, #3b82f6 ${gradientPosition}%, #8b5cf6)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "2px",
          }}
        />
      )}

      {/* Gradient background blob */}
      <div
        className="pointer-events-none blur-2xl rounded-full bg-gradient-to-r 
                   from-blue-500 via-indigo-500 to-purple-500 absolute z-0 
                   transition-all duration-500 mix-blend-lighten opacity-70
                   w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
        style={{ top: 150, left: 150 }}
      />

      {/* Card content */}
      <div className="flex items-center gap-4 p-6 relative z-10 rounded-[10px] 
                      bg-white dark:bg-gray-900 transition-all hover:shadow-lg hover:-translate-y-1">
        {/* Icon */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2 flex items-center justify-center">
          <img
            src={service.icon}
            alt={`${service.title} icon`}
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-lg font-bold">{service.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;