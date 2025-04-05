import React from "react";
import { Container, Row } from "reactstrap";
import BlogListingClient from "@/components/UI/BlogListingClient";
import CommonSection from "@/components/UI/CommonSection";
import blogs from "@/locales/en/blog.json";

export function generateMetadata() {
  return {
    title: "Blog | Bolt, Nut, Screw, and Fasteners",
    description: "Detailed information about bolts, nuts, washers, screws, pins, rivets, and studs. Discover the latest content on stainless bolts, inox nuts, hex socket bolts, self-tapping screws, and fasteners!",
    keywords: "fasteners, bolt types, screw types, stainless fasteners, inox bolt, hex socket bolt, self-tapping screw, stainless washer, stud, pin, rivet, washer, flange bolt, special fasteners",
    alternates: {
      canonical: "https://www.inoksist.com.tr/en/blog",
    },
  };
}

const BlogPage = async () => {
  const blog = blogs.blog;
  const headerContent = blogs.header;
  let headerTitle;
  headerTitle = headerContent.blog;

  // JSON-LD verisi oluşturma - google arama sonuçlarında zengin içerik göstermek ve ürünün yanında fotoğraf göstermek için.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Blog | Bolt, Nut, Screw, and Fasteners",
      image: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728246091/slider-6_fwhez8.jpg",
      },
      articleBody: "Detailed information about bolts, nuts, washers, screws, pins, rivets, and studs. Discover the latest content on stainless bolts, inox nuts, hex socket bolts, self-tapping screws, and fasteners!",
      url: `https://www.inoksist.com.tr/en/blog`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.inoksist.com.tr/en",
      },
      author: {
        "@type": "Person",
        name: "Inoksist Industry",
      },
      publisher: {
        "@type": "Organization",
        name: "Inoksist",
        logo: {
          "@type": "ImageObject",
          url: "https://www.inoksist.com.tr/icon.ico",
        },
      },
      datePublished: "2024-02-20T08:00:00+03:00",
      dateModified: "2024-02-20T08:00:00+03:00",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CommonSection title={headerTitle} />
      <section>
        <Container>
          <Row>
            <BlogListingClient blogData={blog} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
