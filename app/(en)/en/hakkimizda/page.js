import CommonSection from "@/components/UI/CommonSection";
import AboutSection from "@/components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import MotivationSection from "@/components/UI/MotivationSection";
import Testimonial from "@/components/UI/Testimonial";
import AboutArticle from "@/components/UI/AboutArticle";
import "@/styles/about.css";
import Image from "next/image";
import about from "@/locales/en/about.json";
import motivation from "@/locales/en/motivation.json";
import about2 from "@/locales/en/aboutSection.json";
import testimonial from "@/locales/en/testimonial.json";
import article from "@/locales/en/aboutArticle.json";

export function generateMetadata() {
  return {
    title: "Inoksist Industry - About Us | Stainless Steel (Inox) Bolts and Fasteners",
    description: "Since 2013, Inoksist Industry has been your reliable supplier of stainless steel bolts, chrome screws, inox bolts, stainless steel nuts, and other fasteners in İkitelli, Küçükçekmece, Istanbul.",
    keywords: "inoksist, fasteners, hardware, industrial products, stainless steel bolts, stainless steel nuts, inoks bolts, inox bolts, allen bolts, industrial supplies",
    alternates: {
      canonical: "https://www.inoksist.com.tr/en/hakkimizda",
    },
  };
}

//HAKKIMIZDA
export default function About() {
  const aboutContent = about.about;
  const motivationContent = motivation.motivationSection;
  const aboutSection = about2.aboutSection;
  const testimonialContent = testimonial.testimonials;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Inoksist Industry - About Us | Stainless Steel (Inox) Bolts and Fasteners",
    url: "https://www.inoksist.com.tr/en/hakkimizda",
    telephone: "+90 212 549 70 55",
    address: {
      "@type": "PostalAddress",
      streetAddress: "İkitelli OSB Mahallesi, İmsan Sanayi Sitesi, E Blok No:3, Küçükçekmece",
      addressLocality: "İkitelli",
      addressRegion: "İstanbul",
      postalCode: "34306",
      addressCountry: "TR",
    },
    description: "Since 2013, Inoksist Industry has been your reliable supplier of stainless steel bolts, chrome screws, inox bolts, stainless steel nuts, and other fasteners in İkitelli, Küçükçekmece, Istanbul.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CommonSection title={aboutContent.title} />
      <AboutSection aboutClass="aboutPage" aboutCont={aboutSection} />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <Image src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242900/civata2_xjdmni.jpg" alt="About Stainless Steel - Inox Bolts" width={200} height={100} className="w-100 rounded-3" style={{ width: "auto", height: "auto" }} />
              </div>
            </Col>

            <Col xl="6" lg="12" md="12" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">{aboutContent.sectionTitle}</h2>

                <p className="section__description">{aboutContent.sectionDescription1}</p>

                <p className="section__description">{aboutContent.sectionDescription2}</p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h3 className="section__subtitle">{aboutContent.sectionSubtitle}</h3>
                    <h4>
                      <a href="tel:+902125497055" className="contact__info-link">
                        +90 (212) 549 70 55
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AboutArticle content={article} />
      <MotivationSection motivationData={motivationContent} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h2 className="section__subtitle"> {aboutContent.testimonial_title}</h2>
              <h1 className="section__title"> {aboutContent.testimonial_subtitle}</h1>
            </Col>
            <Testimonial testimonial={testimonialContent} />
          </Row>
        </Container>
      </section>
    </>
  );
}
