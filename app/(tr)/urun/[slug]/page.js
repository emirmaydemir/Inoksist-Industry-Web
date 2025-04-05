import { Container, Row, Col } from "reactstrap";
import ProductImageGallery from "@/components/UI/ProductImageGallery"; // Client tarafında işlenecek bileşen
import ProductInfo from "@/components/UI/ProductInfo"; // Ürün bilgileri bileşeni
import "@/styles/product-details.css";
import products from "@/locales/tr/allData.json";

export function generateStaticParams() {
  const data = products.allData;

  // Ürünlerin slug parametrelerini almak
  const slugs = data.map((item) => ({ slug: item.url }));

  // Her slug için parametre döndürülüyor
  return slugs;
}

// Metadata ayarlama fonksiyonu
export function generateMetadata({ params: { slug } }) {
  const data = products.allData;

  const singleProductItem = data.find((item) => item.url === slug);

  if (!singleProductItem) {
    return {
      title: "Urun Bulunamadi",
      description: "Aradiginiz urun bulunamadi.",
    };
  }

  const defaultKeywords = "inoksist, bağlantı elemanları, hırdavat, bakım kimyasalları, modüler su deposu, inoksist, inoks civata, inox civata, paslanmaz civata, paslanmaz somun, paslanmaz pul";
  const keywords = `${singleProductItem.name || ""}, ${defaultKeywords}`;

  return {
    title: `${singleProductItem.name}`,
    description: `${singleProductItem.description}`,
    keywords: keywords.trim(),
    alternates: {
      canonical: `https://www.inoksist.com.tr/urun/${slug}`,
    },
  };
}

// ÜRÜN DETAY SAYFASI
export default function ProductDetails({ params: { slug } }) {
  const data = products.allData;

  const singleProductItem = data.find((item) => item.url === slug);
  const title = "Teknik Özellikler";

  if (!singleProductItem) {
    return <p>Ürün bulunamadı.</p>; // Ürün yoksa bir mesaj göster
  }

  // JSON-LD verisi oluşturma - google arama sonuçlarında zengin içerik göstermek ve ürünün yanında fotoğraf göstermek için.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: singleProductItem.name, // Ürün ismi
      image: {
        "@type": "ImageObject",
        url: singleProductItem.images[0],
      },
      articleBody: singleProductItem.description,
      url: `https://www.inoksist.com.tr/urun/${slug}`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.inoksist.com.tr/", // Ana sayfa URL'si
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `${singleProductItem.name} - İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun`,
      url: "https://www.inoksist.com.tr/",
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
      description: `${singleProductItem.name} - Ürünümüz için fiyat teklifi almak istiyorsanız lütfen bizimle iletişime geçin. ${singleProductItem.description}`,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section>
        <Container>
          <Row>
            <Col lg="6" className="d-flex flex-column align-items-center">
              {/* Resim Galerisi */}
              <ProductImageGallery images={singleProductItem.images} name={singleProductItem.name} />
            </Col>
            <Col lg="6">
              {/* Ürün Bilgileri */}
              <ProductInfo singleProductItem={singleProductItem} language="tr" />
            </Col>
          </Row>

          {/* Ürün Detayları */}
          <div className="product-details-container">
            {/* Teknik Özellikler Başlığı */}
            <Row className="mt-3">
              <Col lg="12">
                <div className="technical-features">
                  <h2 className="technical-features-title">{title}</h2>
                  <hr className="technical-features-line" />
                </div>
              </Col>
            </Row>

            {/* Ürün Tabloları */}
            {singleProductItem.specifications?.length > 0 && (
              <Row className="mt-5">
                <Col lg="12">
                  <div className="section-container2">
                    <h2 className="fw-bold">{singleProductItem.name}</h2>
                    {singleProductItem.title2 && <h3 className="fw-light fst-italic ">{singleProductItem.title2}</h3>}
                    {singleProductItem.title3 && <h4 className="fw-normal">{singleProductItem.title3}</h4>}
                    {singleProductItem.specifications.map((spec, index) => (
                      <div key={index} className="specification-table mb-4">
                        {/* Title varsa göster, yoksa atla */}
                        {spec.title && <h2 className="table-title">{spec.title}</h2>}
                        <div className="table-responsive">
                          {/* Bootstrap responsive tablo sınıfı */}
                          <table className="table table-bordered text-center">
                            <thead>
                              <tr>
                                {spec.headers.map((header, idx) => (
                                  <th key={idx}>{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {spec.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
