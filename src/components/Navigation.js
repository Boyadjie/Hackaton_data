import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ current }) => {
  return (
    <nav>
      <NavLink
        exact="true"
        to="/"
        className={current === "home" ? "current" : ""}
      >
        Accueil
      </NavLink>
      <NavLink
        exact="true"
        to="/chiffres-cles"
        className={current === "key-numbers" ? "current" : ""}
      >
        Chiffres Clés
      </NavLink>
      <NavLink
        exact="true"
        to="/a-propos"
        className={current === "about" ? "current" : ""}
      >
        À propos
      </NavLink>
    </nav>
  );
};

export default Navigation;
