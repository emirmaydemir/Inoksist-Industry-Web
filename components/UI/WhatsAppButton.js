"use client";
import React from "react";
import "@/styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+905059911714"; // WhatsApp numaranı burada gir

  // Tıklama izleme fonksiyonu
  const handleClick = () => {
    // Google Analytics 4'ü kullanarak event göndermek
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "WhatsApp Button",
        event_action: "WhatsApp Button Click",
        event_label: "WhatsApp",
      });
    }
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp üzerinden bizimle iletişime geçin"
      onClick={handleClick} // Tıklama ile Google Analytics izleme
    >
      <i className="ri-whatsapp-line"></i> {/* WhatsApp simgesi */}
    </a>
  );
};

export default WhatsAppButton;
