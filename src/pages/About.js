import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StyledAbout } from "../styles/aboutStyles";
const About = () => {
  return (
    <>
      <Header current="about" />
      <StyledAbout>
        <h1>About</h1>

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

            <textarea className="input" placeholder="Message*"></textarea>
            <input className="btn" type="submit" value="Envoyer" />
          </form>
        </div>
      </StyledAbout>
      <Footer />
    </>
  );
};

export default About;
