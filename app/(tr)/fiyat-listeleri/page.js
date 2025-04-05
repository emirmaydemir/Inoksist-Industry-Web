import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import "@/styles/price-lists.css";
import "@/styles/faq.css";
import PriceListButton from "@/components/UI/PriceListButton";
import price from "@/locales/tr/price.json";
import FAQ from "@/components/UI/FAQ";

export function generateMetadata() {
  return {
    title: "İnoksist Endüstri - Fiyat Listeleri",
    description: "Bağlantı elemanları, hırdavat, bakım kimyasalları ve modüler su depoları fiyatları hakkında bilgi almak için bizimle iletişime geçin. İnoksist Endüstri olarak kaliteli ürünlerimiz ve rekabetçi fiyatlarımızla hizmetinizdeyiz.",
    keywords: "inoksist, istanbul inox, istanbul civata, bağlantı elemanları fiyatları, hırdavat fiyatları, bakım kimyasalları fiyatları, modüler su deposu fiyatları, paslanmaz civata fiyatları, paslanmaz somun fiyatları, inoks civata, inox civata, imbus civata",
    alternates: {
      canonical: "https://www.inoksist.com.tr/fiyat-listeleri",
    },
  };
}

export default function PriceList() {
  const priceContent = price.priceList;
  const faqContent = price.faq;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="price-details-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" md="12">
              <div className="price-details-card">
                <Row>
                  <Col md="6" className="image-col">
                    <Image src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242929/price_m0tlcn.jpg" alt="Paslanmaz civata fiyat listeleri" width={600} height={100} className="img-fluid" />
                  </Col>
                  <Col md="6" className="content-col">
                    <h2 className="price-title">{priceContent.title}</h2>
                    <p className="price-description">
                      {priceContent.description} <strong>{priceContent.strongDescription}</strong> {priceContent.description2}
                    </p>
                    <PriceListButton buttonText={priceContent.buttonText} />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="12" md="12">
              <h2 className="faq-title">{priceContent.faqTitle}</h2>
              <FAQ faqData={faqContent} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
