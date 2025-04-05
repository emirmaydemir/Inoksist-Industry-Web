import React from "react";
import { Container } from "reactstrap";
import "@/styles/footer.css";
import FooterData2 from "@/components/UI/FooterData2";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div id="top" style={{ display: "none" }}></div>
        <FooterData2 />
      </Container>
    </footer>
  );
};

export default Footer;
