import React from "react";
import { StyledFooter } from "../styles/Style";

const Footer = () => {
  return (
    <StyledFooter>
      <a href="/">
        <img src="/img/logo.svg" alt="Vin'J logo" />
      </a>
      <div>
        <a href="/">
          <img src="/img/socials/tiktok.svg" alt="Tiktok logo" />
        </a>
        <a href="/">
          <img src="/img/socials/instagram.svg" alt="Instagram logo" />
        </a>
      </div>
      <p>© Vin'J - 2022 - Tout droits réservé.</p>
    </StyledFooter>
  );
};

export default Footer;
