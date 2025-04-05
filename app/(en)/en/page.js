import React from "react";
import { Container, Row, Col } from "reactstrap";
import "@/styles/find-product-form.css";
import AboutSection from "@/components/UI/AboutSection";
import ServicesList from "@/components/UI/ServicesList";
import HeroSlider from "@/components/UI/HeroSlider";
import Testimonial from "@/components/UI/Testimonial";
import HomeDescription from "@/components/UI/HomeDescription";
import Image from "next/image"; // next/image'den içe aktar
import TrendyolSection from "@/components/UI/TrendyolSection";
import BlogSlider from "@/components/UI/BlogSlider";
import home from "@/locales/en/services.json";
import about2 from "@/locales/en/aboutSection.json";
import testimonial from "@/locales/en/testimonial.json";
import slider from "@/locales/en/homeSlider.json";
import services from "@/locales/en/services.json";
import motivation from "@/locales/en/motivation.json";
import description from "@/locales/en/homeDescription.json";
import blogs from "@/locales/en/blog.json";

export function generateMetadata() {
  return {
    alternates: {
      canonical: "https://www.inoksist.com.tr/en",
    },
  };
}

export default function HomePage() {
  const homeContent = home.services_title;
  const testimonialContent = home.testimonial;
  const aboutSection = about2.aboutSection;
  const testimonialContent2 = testimonial.testimonials;
  const sliderContent = slider.homeSlider;
  const servicesData = services.services;
  const motivationData = motivation.trendyolSection;
  const blogData = blogs.blog;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Inoksist Industry Stainless Steel Bolt Stainless Steel Nut",
    url: "https://www.inoksist.com.tr/en",
    description: "Inoksist offers a wide range of industrial fasteners, providing stainless steel bolt and nut solutions to meet industry needs. Known for its high-quality materials, Inoksist focuses on customer satisfaction, supplying reliable and durable products to businesses across various sectors. With products like stainless steel bolts, nuts, and washers, we aim to provide reliable solutions for all types of projects. Continuously working with advanced technology and innovative approaches, we strive to deliver the best service to our partners.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "İkitelli OSB Mahallesi, İmsan Sanayi Sitesi, E Blok No:3, Küçükçekmece",
      addressLocality: "İkitelli",
      addressRegion: "İstanbul",
      postalCode: "34306",
      addressCountry: "TR",
    },
    telephone: "+90 212 549 70 55",
    openingHours: "08:30-19:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero Section */}
      <section className="p-0 hero__slider-section">
        <HeroSlider slider={sliderContent} />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="12" md="12" sm="12">
                <div className="find__cars-right">
                  <Image src="https://res.cloudinary.com/di9qvtepw/image/upload/f_auto,q_auto/v1/all-images/App-images/referanslar-inoksist" alt="Bolt Sponsors" loading="eager" width={1300} height={100} className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* About Section */}
      <AboutSection aboutCont={aboutSection} />
      {/* Services Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__subtitle">{homeContent.title}</h2>
              <h1 className="section__title">{homeContent.subtitle}</h1>
            </Col>
            <ServicesList services={servicesData} />
          </Row>
        </Container>
      </section>
      <HomeDescription content={description} />
      {/* Blog Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__subtitle">{blogs.header.title}</h2>
              <h1 className="section__title">{blogs.header.subtitle}</h1>
            </Col>
            <BlogSlider blogSliderData={blogData} />
          </Row>
        </Container>
      </section>
      {/* Become a Driver Section */}
      <TrendyolSection motivation={motivationData} />
      {/* Testimonial Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h2 className="section__subtitle">{testimonialContent.title}</h2>
              <h1 className="section__title">{testimonialContent.subtitle}</h1>
            </Col>

            <Testimonial testimonial={testimonialContent2} />
          </Row>
        </Container>
      </section>
    </>
  );
}
