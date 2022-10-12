import React from "react";
import Navigation from "./Navigation";
import { StyledHeader } from "../styles/Style";

const Header = (props) => {
  return (
    <StyledHeader>
      <img src="/img/logo.svg" alt="Vin'j logo" />
      <Navigation {...props} />
    </StyledHeader>
  );
};

export default Header;
