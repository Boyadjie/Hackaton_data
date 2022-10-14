import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AboutBar, StyledAbout } from "../styles/aboutStyles";

import vinted from "../img/vinted.png";
const About = () => {
  return (
    <>
      <Header current="about" />
      <StyledAbout>
        <h1>About</h1>

        <AboutBar color="#19363B" gap={"5rem"} margin={"8rem"}>
          <img src={vinted} alt="Logo Vinted"></img>

          <div className="sect">
            <h2 className="title">Tu ne le portes pas ? Vends le ! </h2>
            <p className="subtitle">
              La seconde main, c'est l'avenir et Vinted te le prouve. Sur
              Vinted, tu vends les vêtements qui ont encore des choses à vivre
              et tu déniches des merveilles que tu ne trouves pas en boutique.
              Nous avons créé Vin'J pour sensibiliser et pour vous montrer les
              chiffres impactant qu'on la production de jean et de textile en
              général.
            </p>
          </div>

          <div className="btncont">
            <div className="btn">
              <a href="https://www.vinted.fr/">Aller sur le site</a>
            </div>
          </div>
        </AboutBar>
        <h1>nous contacter</h1>
        <div className="formcontainer">
          <form className="form">
            <div className="firsts">
              <input
                className="input"
                placeholder="Nom*"
                type="text"
                name="name"
              />
              <input
                className="input"
                placeholder="Prénom*"
                type="text"
                name="firstname"
              />
            </div>
            <input
              className="input"
              type="email"
              placeholder="Adresse mail*"
              name="email"
            />

            <textarea className="input mess" placeholder="Message*"></textarea>
            <input className="btn" type="submit" value="Envoyer" />
          </form>
        </div>
      </StyledAbout>
      <Footer />
    </>
  );
};

export default About;
