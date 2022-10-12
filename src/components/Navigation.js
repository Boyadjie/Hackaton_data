import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation ">
      <nav>
        <NavLink exact="true" to="/">
          Accueil
        </NavLink>
        <NavLink exact="true" to="/chiffres-cles">
          Chiffres Clés
        </NavLink>
        <NavLink exact="true" to="/a-propos">
          À propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
