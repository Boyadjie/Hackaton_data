import React from "react";
import Navigation from "./Navigation";
import { StyledHeader } from "../styles/Style";

const Header = (props) => {
  return (
    <StyledHeader>
      <a href="/">
        <img src="/img/logo.svg" alt="Vin'J logo" />
      </a>
      <Navigation {...props} />
    </StyledHeader>
  );
};

export default Header;
