"use client";
import { useState } from "react";

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? "visible" : "hidden"}`}>{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
