"use client";
import React from "react";
import { Col } from "reactstrap";
import Link from "next/link";
import "@/styles/services-list.css"; // CSS dosyasını içe aktar
import { useLanguage } from "@/components/LanguageProvider";

const ServicesList = ({ services }) => {
  const { language } = useLanguage();
  const servicesData = services;
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} language={language} />
      ))}
    </>
  );
};

const ServiceItem = ({ item, language }) => (
  <Col lg="6" md="6" sm="6" className="mb-4">
    <div className="service__item">
      <Link href={language === "en" ? `/en${item.link}` : item.link}>
        <span className="mb-3 d-inline-block">
          <i className={item.icon} />
        </span>

        <h2>{item.title}</h2>
        <p className="section__description">{item.desc}</p>
      </Link>
    </div>
  </Col>
);

export default ServicesList;
