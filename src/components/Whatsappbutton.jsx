// src/components/WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+96598996030" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-14 h-14 hover:scale-110 transition-transform"
      />
    </a>
  );
};

export default WhatsAppButton;
