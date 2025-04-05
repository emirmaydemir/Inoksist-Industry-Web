import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CommonSection from "@/components/UI/CommonSection";
import "@/styles/contact.css";
import ContactForm from "@/components/UI/ContactForm";
import contact from "@/locales/tr/contact.json";

export function generateMetadata() {
  return {
    title: "İletişim - İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun | İstanbul",
    description: "İletişim Bilgileri - İkitelli OSB, İmsan Sanayi Sitesi, E Blok No:3, Küçükçekmece, İstanbul. Paslanmaz civata, inox vida ve bağlantı elemanları için +90 (212) 549 70 55 veya info@inoksist.com.tr üzerinden ulaşabilirsiniz.",
    keywords: "inoksist, ikitelli civata, imbus civata, m8 civata, inoks civata, inox civata, imbus civata, istanbul civata, İmsan Sanayi Sitesi, Küçükçekmece",
    alternates: {
      canonical: "https://www.inoksist.com.tr/iletisim",
    },
  };
}

// İLETİŞİM
export default function Contact() {
  const contactContent = contact.contact;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun - İletişim", // Firma adı
    url: "https://www.inoksist.com.tr/iletisim",
    address: {
      "@type": "PostalAddress",
      streetAddress: "İkitelli OSB Mahallesi, İmsan Sanayi Sitesi, E Blok No:3, Küçükçekmece",
      addressLocality: "İkitelli",
      addressRegion: "İstanbul", // Şehir
      postalCode: "34306", // Posta kodu
      addressCountry: "TR", // Ülke
    },
    telephone: "+90 212 549 70 55", // Telefon numarası
    email: "info@inoksist.com.tr", // E-posta adresi
    logo: "https://www.inoksist.com.tr/icon.ico",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CommonSection title={contactContent.title} />
      <section>
        <Container>
          {/* Üst Kısım: Kart ile Adres, Telefon, Email ve Sosyal Medya */}
          <Row className="mb-5">
            <Col lg="12">
              <Card className="contact__card p-4">
                <CardBody className="d-flex flex-column flex-md-row align-items-stretch">
                  <Row className="w-100 g-3">
                    {/* Adres */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold">{contactContent.addresslabel}</p>
                        <p>İkitelli OSB Mahallesi İmsan Sanayi Sitesi E Blok No:3 Küçükçekmece / İSTANBUL</p>
                      </div>
                    </Col>

                    {/* Telefon */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold"> {contactContent.phonelabel}</p>
                        <a href="tel:+902125497055">+90 (212) 549 70 55</a>
                      </div>
                    </Col>

                    {/* Email */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold"> {contactContent.emaillabel}</p>
                        <a href="mailto:info@inoksist.com.tr">info@inoksist.com.tr</a>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Alt Kısım: Google Maps ve Form */}
          <Row className="mt-5">
            {/* Sol Kısım: Google Haritalar */}
            <Col lg="5" md="12" sm="12" className="d-flex align-items-stretch mb-4 mb-md-0">
              <div className="map-container" style={{ width: "100%", height: "500px" }}>
                <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6016.617526971584!2d28.787778000000003!3d41.062243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa591c3cabfa9%3A0x86483f9112bb615f!2s%C4%B0noksist%20Paslanmaz%20Civata%20Somun%20Pul%20Ana%20Tedarik%C3%A7isi!5e0!3m2!1str!2str!4v1726692358510!5m2!1str!2str&gestureHandling=greedy" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </Col>

            {/* Dikey Çizgi */}
            <Col lg="1" className="d-none d-md-flex justify-content-center">
              <div className="vertical-divider"></div>
            </Col>

            {/* Sağ Kısım: İletişim Formu */}
            <Col lg="6" md="12" sm="12" className="d-flex align-items-stretch">
              <ContactForm contactContent={contactContent} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
