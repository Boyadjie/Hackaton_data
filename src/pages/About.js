import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <div id="about">
      <Header current="about" />

      <main>
        <h1>About</h1>
        <form className="form">
          <div className="leftForm">
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
            <input
              className="input"
              type="email"
              placeholder="Adresse mail*"
              name="email"
            />
            <input
              className="input"
              type="text"
              name="sujet"
              placeholder="Sujet du message*"
            />
            <textarea className="input" placeholder="Message*"></textarea>
            <input className="btn" type="submit" value="Envoyer" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default About;
