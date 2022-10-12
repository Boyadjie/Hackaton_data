import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <form className="form">
        <div className="leftForm">
          <input className="input" placeholder="Nom*" type="text" name="name" />
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
    </div>
  );
};

export default About;
