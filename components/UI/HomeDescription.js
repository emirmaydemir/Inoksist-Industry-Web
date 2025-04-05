"use client";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import "@/styles/home-description.css";
import { useLanguage } from "@/components/LanguageProvider";

const HomeDescription = ({ content }) => {
  const { language } = useLanguage();
  const highlightText = (text) => {
    return text.replace(/paslanmaz civata/g, "<strong>paslanmaz civata</strong>");
  };

  return (
    <section className="home-feature-section py-5">
      <Container>
        <div className="feature-content">
          <h2 className="section__subtitle">{content.subtitle}</h2>
          <h1 className="custom-title">{content.title}</h1>

          <div className="section-block-desc">
            <p dangerouslySetInnerHTML={{ __html: highlightText(content.intro) }} />
          </div>

          <div className="cards-container">
            {content.sections.map((section, index) => (
              <div key={index} className="section-block">
                <Link href={language === "en" ? `/en${content.link}` : content.link}>
                  <h2>{section.title}</h2>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: highlightText(section.content) }} />
              </div>
            ))}
          </div>

          <div className="section-block-desc">
            <p dangerouslySetInnerHTML={{ __html: highlightText(content.conclusion) }} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeDescription;
