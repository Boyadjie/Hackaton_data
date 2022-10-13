import React from "react";
import StepContent from "./StepContent";

const Step = ({ step }) => {
  return (
    <div className={`step step-${step.id}`} key={step.id}>
      <img
        className="illustration"
        src={`/img/home/steps/step${step.id}.svg`}
        alt={`${step.title} illustration`}
      />
      <p className="step-index">Étape {step.id}</p>
      <p className="step-title">{step.title}</p>

      {step.paragraph.map((paragraph, index) => {
        if (typeof paragraph === "object") {
          return (
            <ul key={index}>
              {paragraph.map((listElement, index) => {
                return <li key={index}>{listElement}</li>;
              })}
            </ul>
          );
        } else {
          return (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
          );
        }
      })}

      {typeof step.countryImgPath !== "object" && (
        <img className="background" src={step.countryImgPath} alt="Country" />
      )}

      {typeof step.countryImgPath === "object" && (
        <div className="countries">
          <img src={step.countryImgPath[0]} alt="Country" />
          <img src={step.countryImgPath[1]} alt="Country" />
        </div>
      )}

      <StepContent id={step.id} content={step.content} />
    </div>
  );
};

export default Step;
