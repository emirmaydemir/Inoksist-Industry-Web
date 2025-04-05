"use client";
import Image from "next/image";
import React, { useState } from "react";

const BlogContent = ({ blogDetail }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="blog-main-content">
      <div className="blog-image-container">
        <Image src={blogDetail.imgUrl} alt={blogDetail.title} width={800} height={450} className="blog-image" quality={80} loading="eager" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw" />
      </div>

      <h1 className="blog-title">{blogDetail.title}</h1>
      <p className="main-description" dangerouslySetInnerHTML={{ __html: blogDetail.mainDescription }} />

      {blogDetail.subtitles.map((subtitle, index) => (
        <div key={index} className="blog-section">
          <h2 className="subtitle">{subtitle}</h2>
          <div className="description" dangerouslySetInnerHTML={{ __html: blogDetail.descriptions[index] || "" }} />
        </div>
      ))}

      {blogDetail.youtubeUrl && (
        <div className="video-wrapper" onClick={() => setVideoLoaded(true)} style={{ cursor: "pointer" }}>
          {!videoLoaded ? (
            <div className="video-placeholder">
              <Image src={`https://res.cloudinary.com/di9qvtepw/image/upload/f_auto,q_auto/v1/all-images/Blog/p2o5gqkxrykzbj4uhge2`} alt={`${blogDetail.youtubeTitle} thumbnail`} width={560} height={315} />
              <button className="play-button">▶</button>
            </div>
          ) : (
            <iframe src={blogDetail.youtubeUrl.replace("shorts/", "embed/").split("?")[0]} title={blogDetail.youtubeTitle || "YouTube video"} allowFullScreen></iframe>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogContent;
