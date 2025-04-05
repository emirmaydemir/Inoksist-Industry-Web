import React from "react";
import { Container, Row } from "reactstrap";
import BlogListingClient from "@/components/UI/BlogListingClient";
import CommonSection from "@/components/UI/CommonSection";
import blogs from "@/locales/tr/blog.json";

export function generateMetadata() {
  return {
    title: "Blog | Civata, Somun, Vida ve Bağlantı Elemanları",
    description: "Civata, somun, rondela, vida, pim, perçin ve saplamalar hakkında detaylı bilgiler. Paslanmaz civata, inox somun, imbus, akıllı vida ve bağlantı elemanları ile ilgili en güncel içerikleri keşfedin!",
    keywords: "bağlantı elemanları, civata çeşitleri, vida çeşitleri, paslanmaz bağlantı elemanları, inox civata, imbus civata, akıllı vida, paslanmaz pul, saplama, pim, perçin, rondela, flanşlı civata, özel bağlantı elemanları",
    alternates: {
      canonical: "https://www.inoksist.com.tr/blog",
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
      headline: "Blog | Civata, Somun, Vida ve Bağlantı Elemanları",
      image: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728246091/slider-6_fwhez8.jpg",
      },
      articleBody: "Civata, somun, rondela, vida, pim, perçin ve saplamalar hakkında detaylı bilgiler. Paslanmaz civata, inox somun, imbus, akıllı vida ve bağlantı elemanları ile ilgili en güncel içerikleri keşfedin!",
      url: `https://www.inoksist.com.tr/blog`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.inoksist.com.tr/",
      },
      author: {
        "@type": "Person",
        name: "İnoksist Endüstri",
      },
      publisher: {
        "@type": "Organization",
        name: "İnoksist",
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
