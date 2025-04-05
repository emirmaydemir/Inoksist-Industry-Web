import React from "react";
import blogContents from "@/locales/tr/blogContent.json";
import blogs from "@/locales/tr/blog.json";
import "@/styles/blog-detail.css";
import RelatedBlogs from "@/components/UI/RelatedBlogs";
import BlogContent from "@/components/UI/BlogContent";
import { Container, Row, Col } from "reactstrap";

export function generateStaticParams() {
  const data = blogContents.Content;
  // Ürünlerin slug parametrelerini almak
  const contents = data.map((item) => ({ content: item.url }));
  // Her slug için parametre döndürülüyor
  return contents;
}

// Metadata ayarlama fonksiyonu
export function generateMetadata({ params: { content } }) {
  const data = blogContents.Content;

  const singleContentItem = data.find((item) => item.url === content);

  if (!singleContentItem) {
    return {
      title: "Blog Bulunamadi",
      description: "Aradiginiz blog bulunamadi.",
    };
  }

  const keywords = "civata, somun, rondela, vida, pim, perçin, saplama, paslanmaz civata, paslanmaz somun, inox civata, imbus, akıllı vida, paslanmaz pul, bağlantı elemanları, civata çeşitleri, vida çeşitleri";

  return {
    title: `${singleContentItem.title}`,
    description: `${singleContentItem.mainDescription2}`,
    keywords: keywords.trim(),
    alternates: {
      canonical: `https://www.inoksist.com.tr/blog/${content}`,
    },
  };
}

const BlogDetailPage = ({ params: { content } }) => {
  const data = blogContents.Content;
  const blogDetail = data.find((item) => item.url === content);

  if (!blogDetail) {
    return <p>İçerik bulunamadı.</p>;
  }

  // JSON-LD verisi oluşturma - google arama sonuçlarında zengin içerik göstermek ve ürünün yanında fotoğraf göstermek için.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blogDetail.title,
      image: {
        "@type": "ImageObject",
        url: blogDetail.imgUrl,
      },
      articleBody: blogDetail.mainDescription2 + "\n\n" + (Array.isArray(blogDetail.subtitles) && Array.isArray(blogDetail.descriptions2) ? blogDetail.subtitles.map((subtitle, index) => subtitle + "\n" + (blogDetail.descriptions2[index] || "")).join("\n\n") : ""),
      url: `https://www.inoksist.com.tr/blog/${content}`,
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
      datePublished: "2025-03-20T08:00:00+03:00",
      dateModified: "2025-03-20T08:00:00+03:00",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section>
        <Container>
          <Row>
            {/* Ana Blog Yazısı Kolonu */}
            <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9}>
              <article>
                <BlogContent blogDetail={blogDetail} />
              </article>
            </Col>
            {/* Related Blogs Kolonu */}
            <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3} className="related-blogs-wrapper">
              <aside>
                {" "}
                <h3>{blogs.header.relatedTitle}</h3>
                <RelatedBlogs currentBlogUrl={content} blogData={blogs} />
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetailPage;
