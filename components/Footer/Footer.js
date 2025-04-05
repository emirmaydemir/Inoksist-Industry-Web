import React from "react";
import { Container } from "reactstrap";
import "@/styles/footer.css";
import FooterData from "@/components/UI/FooterData";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div id="top" style={{ display: "none" }}></div>
        <FooterData />
      </Container>
    </footer>
  );
};

export default Footer;
