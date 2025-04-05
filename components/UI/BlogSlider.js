"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/blog-slider.css";
import { useLanguage } from "@/components/LanguageProvider";

export default function BlogSlider({ blogSliderData }) {
  const { language } = useLanguage();
  const [itemsVisible, setItemsVisible] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsVisible(1);
        // Reset index to avoid blank slides if switching from desktop to mobile
        setCurrentIndex(0);
      } else {
        setItemsVisible(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = blogSliderData.length - itemsVisible;
  const slideWidthPercent = 100 / itemsVisible;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="blog-slider-container">
      <div className="blog-slider-wrapper" style={{ transform: `translateX(-${currentIndex * slideWidthPercent}%)` }}>
        {blogSliderData.map((post) => (
          <Link key={post.id} href={language === "en" ? `/en/blog/${post.url}` : `/blog/${post.url}`} className="blog-slider-slide" aria-label={`${post.name} blog detay sayfası`}>
            <div className="blog-slider-card">
              <div className="blog-slider-image-container">
                <Image src={post.imgUrl} alt={post.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
              </div>
              <div className="blog-slider-content">
                <h3 className="blog-slider-title">{post.name}</h3>
                <p className="blog-slider-date">{post.date}</p>
                <span className="blog-slider-arrow">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="blog-slider-prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="blog-slider-next" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
}
