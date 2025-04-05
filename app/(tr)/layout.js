import "../globals.css";
import WhatsAppButton from "@/components/UI/WhatsAppButton";
import ToastNotifications from "@/components/UI/ToastNotifications";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ClientSpinner from "@/components/UI/ClientSpinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Fragment } from "react";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL(`https://www.inoksist.com.tr/`),
  title: "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun",
  description: "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun, İnox Civata Tedarikçisi",
  keywords: "inoksist, inoks civata , inox civata, paslanmaz civata, paslanmaz somun, paslanmaz pul, rondela, norm civata, standart civata, istanbul civata, ikitelli civata ,civata ithalatçısı, yarıklı pim, krom civata, krom somun, krom pul, setskur, imbus, alyan, krom vida, bağlantı elemanları",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Buraya Google Fonts ve diğer meta etiketlerini ekleyin */}
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
      </Head>
      <LanguageProvider>
        <body>
          <Fragment>
            <ClientSpinner />
            <Header />
            <main>{children}</main>
            <WhatsAppButton />
            <Footer />
            <ToastNotifications />
          </Fragment>
        </body>
      </LanguageProvider>
      <GoogleAnalytics gaId="G-3ZT20JJWKG" />
    </html>
  );
}
