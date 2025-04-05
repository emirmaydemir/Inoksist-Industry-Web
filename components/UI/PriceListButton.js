"use client"; // Bu direktif component'in client-side çalışmasını sağlar.

import React from "react";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation"; // next/navigation'dan useRouter import ediyoruz
import { useLanguage } from "@/components/LanguageProvider";

export default function PriceListButton({ buttonText }) {
  const { language } = useLanguage();
  const router = useRouter(); // useRouter hook'unu çağırıyoruz

  const handleContactClick = () => {
    if (language === "en") {
      router.push("/en/iletisim"); // İngilizce sayfaya yönlendirme
    } else {
      router.push("/iletisim"); // Türkçe sayfaya yönlendirme
    }
  };

  return (
    <Button color="primary" className="contact-button" onClick={handleContactClick}>
      {buttonText}
    </Button>
  );
}
