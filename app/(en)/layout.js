import "../globals.css";
import WhatsAppButton from "@/components/UI/WhatsAppButton";
import ToastNotifications from "@/components/UI/ToastNotifications";
import Header2 from "@/components/Header/Header2";
import Footer2 from "@/components/Footer/Footer2";
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
  title: "Inoksist Industry Stainless Steel Bolt Stainless Steel Nut",
  description: "Inoksist Industry Stainless Steel Bolt Stainless Steel Nut, Inox Bolt Supplier",
  keywords: "inoksist, inox bolt, inox bolts, stainless steel bolt, stainless steel nut, stainless steel washer, washer, standard bolt, norm bolt, istanbul bolt, ikitelli bolt, bolt importer, cotter pin, chrome bolt, chrome nut, chrome washer, setscrew, allen, chrome screw, fasteners",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
            <Header2 />
            <main>{children}</main>
            <WhatsAppButton />
            <Footer2 />
            <ToastNotifications />
          </Fragment>
        </body>
      </LanguageProvider>
      <GoogleAnalytics gaId="G-3ZT20JJWKG" />
    </html>
  );
}
