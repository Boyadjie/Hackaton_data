import React from "react";
import Header from "../components/Header";
import { StyledNotFound } from "../styles/Style";

const NotFound = () => {
  return (
    <div className="notFound">
      <Header current="404" />

      <StyledNotFound>
        <div>
          <p>
            Nous sommes désolé, cette page
            <br />
            n'est pas accessible pour le moment !{" "}
          </p>
          <a className="btn" href="/">
            RETOUR À L'ACCUEIL
          </a>
        </div>
        <div>
          <img src="/img/404.svg" alt="Not Found" />
        </div>
      </StyledNotFound>
    </div>
  );
};

export default NotFound;
