import React from "react";

const StepContent = ({ id, content }) => {
  return (
    <div className="step-content">
      {(id === 1 || id === 2) && (
        <div className="double-arrow">
          {content.map((data, index) => {
            return (
              <div key={index}>
                <p>{data.data}</p>
                <img src={data.imgPath} alt="Data illustration" />
              </div>
            );
          })}
        </div>
      )}

      {id === 3 && (
        <div className="double-double-arrow">
          <div>
            <p>{content[0].data}</p>
            <img src={content[0].imgPath} alt="Data illustration" />
          </div>
          <div id="double-content">
            <div>
              <p>{content[1].data[0]}</p>
              <p>+</p>
              <p>{content[1].data[1]}</p>
            </div>
            <div>
              <img src={content[1].imgPath[0]} alt="Data illustration" />
              <img src={content[1].imgPath[1]} alt="Data illustration" />
            </div>
          </div>
        </div>
      )}

      {id === 4 && (
        <div className="tripple">
          {content.map((card, index) => {
            return (
              <div key={index}>
                <img src={card.imgPath} alt="Data illustration" />
                <p>{card.data}</p>
                <img src={card.countryPath} alt="Data country" />
                <img
                  src={`/img/home/steps/content/step4/arrows/arrow${index}.svg`}
                  alt="Country name"
                  className="arrow-country"
                />
              </div>
            );
          })}
        </div>
      )}

      {id === 5 && (
        <div className="double">
          {content.map((block, index) => {
            return (
              <div key={index}>
                <img src={block.imgPath} alt="Data illustration" />
                <p>{block.data}</p>
              </div>
            );
          })}
        </div>
      )}

      {id === 6 && (
        <div className="simple">
          <div>
            <p dangerouslySetInnerHTML={{ __html: content.data1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: content.data2 }}></p>
            <img src={content.imgPath} alt="Data illustration" />
          </div>
        </div>
      )}
    </div>
  );
};

export default StepContent;
