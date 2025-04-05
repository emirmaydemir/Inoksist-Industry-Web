// pages/fastener-listing.js
import { Container, Row } from "reactstrap";
import CommonSection from "@/components/UI/CommonSection";
import FastenerListingClient from "@/components/UI/FastenerListingClient";
import categories from "@/locales/en/categories.json";
import cat1 from "@/locales/en/baglanti-elemanlari.json";
import cat2 from "@/locales/en/hirdavat.json";
import cat3 from "@/locales/en/bakim-kimyasallari.json";
import cat4 from "@/locales/en/moduler-su-deposu.json";

export function generateStaticParams() {
  // Kategori ve ürün eşleşmelerini manuel olarak belirtiyoruz
  const staticParams = [
    // Bağlantı elemanları kategorisi
    { category: "baglanti-elemanlari", product: "urunler" },
    { category: "baglanti-elemanlari", product: "paslanmaz-baglanti-elemanlari" },
    { category: "baglanti-elemanlari", product: "celik-baglanti-elemanlari" },
    { category: "baglanti-elemanlari", product: "demir-baglanti-elemanlari" },
    { category: "baglanti-elemanlari", product: "pirinc-baglanti-elemanlari" },
    { category: "baglanti-elemanlari", product: "titanyum-baglanti-elemanlari" },
    { category: "baglanti-elemanlari", product: "ozel-uretim-baglanti-elemanlari" },
    { category: "baglanti-elemanlari", product: "10-9-ve-12-9-baglanti-elemanlari" },
    { category: "baglanti-elemanlari", product: "kama-baglanti-elemanlari" },

    // Hırdavat kategorisi
    { category: "hirdavat", product: "urunler" },
    { category: "hirdavat", product: "delme-kesme-yaglari-grubu" },
    { category: "hirdavat", product: "is-guvenligi-grubu" },
    { category: "hirdavat", product: "kaynak-ekipmanlari-grubu" },
    { category: "hirdavat", product: "kesici-ve-asindirici-grubu" },
    { category: "hirdavat", product: "ambalaj-ve-paketleme-grubu" },
    { category: "hirdavat", product: "silikon-ve-sizdirmazlik-grubu" },
    { category: "hirdavat", product: "sprey-boya" },
    { category: "hirdavat", product: "yapistirici-grubu" },
    { category: "hirdavat", product: "el-aletleri" },
    { category: "hirdavat", product: "profesyonel-el-aletleri" },

    // Bakım kimyasalları kategorisi
    { category: "bakim-kimyasallari", product: "urunler" },
    { category: "bakim-kimyasallari", product: "bakim-kimyasallari" },
    { category: "bakim-kimyasallari", product: "paslanmaz-spreyler" },

    // Modüler su deposu kategorisi
    { category: "moduler-su-deposu", product: "urunler" },
    { category: "moduler-su-deposu", product: "moduler-su-deposu" },
  ];

  return staticParams;
}

// Meta etiketlerini dinamik olarak oluşturun
export function generateMetadata({ params: { category, product } }) {
  const headerContent = categories.header;

  let title;
  let description;
  let keywords;

  switch (category) {
    case "baglanti-elemanlari":
      title = headerContent.fastener;
      description = "Fasteners - Stainless Steel Fasteners - Steel Fasteners - Iron Fasteners - Brass Fasteners - Titanium Fasteners - Custom-Made Fasteners - 10.9 and 12.9 Fasteners - Key Elements. Easily find the fasteners that suit your needs.";
      keywords = "inoksist, fasteners, stainless steel fasteners, steel fasteners, iron fasteners, brass fasteners, titanium fasteners, custom-made fasteners, 10.9 fasteners, 12.9 fasteners, key elements, industrial fasteners, inoks bolt, inox bolt, allen bolt";
      break;
    case "hirdavat":
      title = headerContent.technical;
      description = "Hardware - Drilling & Cutting Oils - Occupational Safety Equipment - Welding Equipment - Cutting & Abrasive Tools - Packaging & Wrapping - Sealants & Adhesives - Spray Paints - Hand Tools - Power Tools. Easily find the hardware you need.";
      keywords = "inoksist, hardware, drilling cutting oils, occupational safety equipment, welding equipment, cutting tools, abrasive tools, packaging materials, sealing products, adhesives, silicone products, spray paint, construction chemicals, hand tools, power tools";
      break;
    case "bakim-kimyasallari":
      title = headerContent.maintenance;
      description = "Maintenance chemicals include cleaners, protectants, and lubricants specially formulated for various surfaces. We offer the highest quality products to ensure the efficient operation of your workplace equipment.";
      keywords = "inoksist, maintenance chemicals, stainless steel sprays, mold release spray, brake cleaner, liquid grease, gas shielded welding spray, rust remover, W 44 T multi-spray, stainless steel spray, aluminum spray, zinc spray, industrial cleaners, lubricants, protectants, cleaning products";
      break;
    case "moduler-su-deposu":
      title = headerContent.modular;
      description = "Our modular water tanks offer an ideal solution for businesses and individuals seeking sustainable water storage. Discover our custom-designed modular systems to efficiently manage your water resources with confidence.";
      keywords = "inoksist, modular water tank, water storage systems, sustainable water solutions, water management, custom water tanks, water resources, reliable water storage, water needs, modular systems, industrial water storage";
      break;
    default:
      title = headerContent.all; // Default: "All Categories"
      description = "We offer solutions tailored to your needs with our wide range of products, including fasteners, hardware, maintenance chemicals, and modular water tanks. Explore all categories and experience quality and reliability together.";
      break;
  }

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: `https://www.inoksist.com.tr/en/${category}/${product}`,
    },
  };
}

// BAĞLANTI ELEMANLARI
export default function FastenerListing({ params: { category, product } }) {
  const headerContent = categories.header;
  const categoriesContent = categories[category];

  let headerTitle;
  let fastenerData;

  switch (category) {
    case "baglanti-elemanlari":
      headerTitle = headerContent.fastener;
      fastenerData = cat1[category];
      break;
    case "hirdavat":
      headerTitle = headerContent.technical;
      fastenerData = cat2[category];
      break;
    case "bakim-kimyasallari":
      headerTitle = headerContent.maintenance;
      fastenerData = cat3[category];
      break;
    case "moduler-su-deposu":
      headerTitle = headerContent.modular;
      fastenerData = cat4[category];
      break;
    default:
      headerTitle = headerContent.all; // Varsayılan olarak "Tüm Kategoriler"
      break;
  }

  const itemNames = categoriesContent.map((item) => item.description).join(", ");

  // JSON-LD nesnesini oluşturma
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: headerTitle,
    url: `https://www.inoksist.com.tr/en/${category}/urunler`,
    telephone: "+90 212 549 70 55",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    description: `${headerTitle} Products: ${itemNames} - We offer reliable and high-quality solutions for your industrial needs with our products.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "İkitelli OSB Mahallesi, İmsan Sanayi Sitesi, E Blok No:3, Küçükçekmece",
      addressLocality: "İkitelli",
      addressRegion: "İstanbul",
      postalCode: "34306",
      addressCountry: "TR",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CommonSection title={headerTitle} />
      <section>
        <Container>
          <Row>
            {/* Client-Side Component */}
            <FastenerListingClient fastenerData={fastenerData} categoriesContent={categoriesContent} headerContent={headerContent} product={product} category={category} />
          </Row>
        </Container>
      </section>
    </>
  );
}
