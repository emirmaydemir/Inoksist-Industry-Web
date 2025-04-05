"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/blog-card.css";
import { useLanguage } from "@/components/LanguageProvider";

const BlogCard = ({ title, content, imageUrl, url, date }) => {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu kontrol et
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992); // 992px altındaki ekranlar için true
    };

    handleResize();
    window.addEventListener("resize", handleResize); // Resize olayını izleyerek yeniden render

    return () => window.removeEventListener("resize", handleResize); // Temizleme
  }, []);

  const contentLength = isMobile ? 325 : 500;

  return (
    <Link className="blog-card" href={language === "en" ? `/en/blog/${url}` : `/blog/${url}`} aria-label={`${title} bloğunun detay sayfasını görüntüle`} passHref>
      <div className="blog-image-container">
        <Image src={imageUrl} fill alt={title} style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality="auto" />
      </div>
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{content.length > contentLength ? content.substring(0, contentLength) + "..." : content}</p>
        {date && <p className="blog-date">{date}</p>}
      </div>
    </Link>
  );
};

export default BlogCard;
