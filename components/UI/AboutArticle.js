import React from "react";
import { Container, Row, Col } from "reactstrap";
import "@/styles/about-article.css";

const AboutArticle = ({ content }) => {
  return (
    <section className="price-list-article-section py-5">
      <Container>
        <Row>
          <Col lg="12">
            <div className="article-content">
              <h4 className="section__subtitle">{content.subtitle}</h4>
              <h2 className="section__title">{content.title}</h2>

              <div className="article-text">
                {content.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="article-subtitle">{section.title}</h3>
                    <p className="mb-4">{section.content}</p>
                  </div>
                ))}

                <p className="mb-4">{content.conclusion}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutArticle;
