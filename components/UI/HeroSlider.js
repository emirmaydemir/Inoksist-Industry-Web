"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "reactstrap";
import "@/styles/hero-slider.css";
import { useLanguage } from "@/components/LanguageProvider";

const HeroSlider = ({ slider }) => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slider.length;
  const slideInterval = 4000; // 3 saniye aralıklarla geçiş

  // Tıklama izleme fonksiyonu
  const handleClick = () => {
    // Google Analytics 4'ü kullanarak event göndermek
    if (window.gtag) {
      window.gtag("event", "contact_click", {
        event_category: "Contact Button",
        event_action: "Contact Button Click",
        event_label: "Contact",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="hero__slider">
      {slider.map((slide, index) => (
        <div key={index} className={`slider__item ${index === currentSlide ? "active" : ""}`}>
          <div className="slider-image-contain">
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              style={{ objectFit: "cover" }}
              className="slider-image"
              loading={index === 0 ? "eager" : "lazy"}
              srcSet={`
              ${slide.image}?w=300 300w,
              ${slide.image}?w=600 600w,
              ${slide.image}?w=1200 1200w
            `}
              sizes="(max-width: 600px) 100vw, 600px"
            />
            <div className="overlay" />
          </div>
          <Container>
            <div className="slider__content">
              <h2 className="text-light mb-3">{slide.title}</h2>
              <h1 className="text-light mb-4">{slide.heading}</h1>
              <button className="btn reserve__btn mt-4" onClick={handleClick}>
                <Link href={language === "en" ? `/en${slide.link}` : slide.link}>{slide.buttonText}</Link>
              </button>
            </div>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
