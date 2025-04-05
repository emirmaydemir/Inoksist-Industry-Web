import React from "react";
import BlogCard from "@/components/UI/BlogCard";
import "@/styles/blog-card.css";

const BlogListingClient = ({ blogData }) => {
  return (
    <div className="blog-container">
      {blogData.map((blog) => (
        <BlogCard key={blog.id} title={blog.name} content={blog.description} imageUrl={blog.imgUrl} url={blog.url} date={blog.date} />
      ))}
    </div>
  );
};

export default BlogListingClient;
