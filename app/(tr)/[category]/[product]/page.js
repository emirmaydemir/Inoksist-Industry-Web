// pages/fastener-listing.js
import { Container, Row } from "reactstrap";
import CommonSection from "@/components/UI/CommonSection";
import FastenerListingClient from "@/components/UI/FastenerListingClient";
import categories from "@/locales/tr/categories.json";
import cat1 from "@/locales/tr/baglanti-elemanlari.json";
import cat2 from "@/locales/tr/hirdavat.json";
import cat3 from "@/locales/tr/bakim-kimyasallari.json";
import cat4 from "@/locales/tr/moduler-su-deposu.json";

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
      description = "Bağlantı Elemanları - Paslanmaz Bağlantı Elemanları - Çelik Bağlantı Elemanları - Demir Bağlantı Elemanları - Pirinç Bağlantı Elemanları - Titanyum Bağlantı Elemanları - Özel Üretim Bağlantı Elemanları - 10.9 ve 12.9 Bağlantı Elemanları - Kama Elemanları. İhtiyaçlarınıza uygun bağlantı elemanlarını kolayca bulabilirsiniz.";
      keywords = "inoksist, bağlantı elemanları, paslanmaz bağlantı elemanları, çelik bağlantı elemanları, demir bağlantı elemanları, pirinç bağlantı elemanları, titanyum bağlantı elemanları, özel üretim bağlantı elemanları, 10.9 bağlantı elemanları, 12.9 bağlantı elemanları, kama elemanları, sanayi bağlantı elemanları, inoks civata, inox civata, imbus civata";
      break;
    case "hirdavat":
      title = headerContent.technical;
      description = "Hırdavat - Delme Kesme Yağları Grubu - İş Güvenliği Grubu - Kaynak Ekipmanları Grubu - Kesici ve Aşındırıcı Grubu - Ambalaj ve Paketleme Grubu - Silikon ve Sızdırmazlık Grubu - Sprey Boya - Yapıştırıcı Grubu - El Aletleri - Elektrikli El Aletleri. İhtiyaçlarınıza uygun hırdavatları kolayca bulabilirsiniz.";
      keywords = "inoksist, hırdavat, delme kesme yağları, iş güvenliği ekipmanları, kaynak ekipmanları, kesici ekipmanlar, aşındırıcı ekipmanlar, ambalaj malzemeleri, paketleme ürünleri, sızdırmazlık ürünleri, yapıştırıcılar, silikon ürünleri, sprey boya, yapı kimyasalları, el aletleri, elektrikli el aletleri";
      break;
    case "bakim-kimyasallari":
      title = headerContent.maintenance;
      description = "Bakım kimyasalları, çeşitli yüzeyler için özel formülasyonlarla üretilmiş temizleyiciler, koruyucular ve yağlayıcılardan oluşur. İş yerinizdeki ekipmanların verimli çalışmasını sağlamak için en kaliteli ürünleri sunuyoruz.";
      keywords = "inoksist, bakım kimyasalları, paslanmaz spreyler, kalıp ayırıcı sprey, fren balata temizleyici, sıvı gres, gazaltı kaynak spreyi, pas sökücü, W 44 T multi sprey, paslanmaz çelik sprey, alüminyum sprey, çinko sprey, endüstriyel temizleyiciler, yağlayıcılar, koruyucular, temizlik ürünleri";
      break;
    case "moduler-su-deposu":
      title = headerContent.modular;
      description = "Modüler su depolarımız, sürdürülebilir çözümler arayan işletmeler ve bireyler için ideal bir tercih sunar. Su kaynaklarınızı en verimli şekilde yönetmek için, projelerinize özel olarak tasarlanmış modüler sistemlerimizle tanışın ve su depolama ihtiyacınızı güvenle karşılayın.";
      keywords = "inoksist, modüler su deposu, su depolama sistemleri, sürdürülebilir su çözümleri, su yönetimi, projeye özel su depoları, su kaynakları, güvenilir su depolama, su ihtiyaçları, modüler sistemler, endüstriyel su depolama";
      break;
    default:
      title = headerContent.all; // Varsayılan olarak "Tüm Kategoriler"
      description = "Bağlantı Elemanları, Hırdavat, Bakım kimyasalları ve Modüler su depolarımızın yer aldığı geniş ürün yelpazemizle ihtiyaçlarınıza yönelik çözümler sunuyoruz. Tüm kategorilerdeki ürünlerimizi keşfedin ve kalite ile güveni bir arada yaşayın.";
      break;
  }

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: `https://www.inoksist.com.tr/${category}/${product}`,
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
    url: `https://www.inoksist.com.tr/${category}/urunler`,
    telephone: "+90 212 549 70 55",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    description: `${headerTitle} Ürünlerimiz: ${itemNames} - ürünlerimiz ile endüstriyel ihtiyaçlarınıza güvenilir ve kaliteli çözümler sunuyoruz.`,
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
