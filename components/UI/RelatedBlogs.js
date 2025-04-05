"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const RelatedBlogs = ({ currentBlogUrl, blogData }) => {
  const { language } = useLanguage();
  const blog = blogData.blog.filter((blog) => blog.url !== currentBlogUrl);

  return (
    <div className="related-blogs-container">
      {blog.map((blog, index) => (
        <Link href={language === "en" ? `/en/blog/${blog.url}` : `/blog/${blog.url}`} aria-label={`${blog.name} bloğunun detay sayfasını görüntüle`} passHref key={index}>
          <div className="related-blog-item">
            <div className="related-blog-img-container">
              <Image src={blog.imgUrl} fill alt={blog.name} priority={index === 0} style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality="auto" />
            </div>
            <div className="overlay">
              <h2>{blog.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedBlogs;
