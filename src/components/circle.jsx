import React from "react";

import { StyledCircle } from "../styles/Style";

const Circle = ({ size, main, img, sub, hSize, sSize, imgSub, gap, top }) => {
  return (
    <StyledCircle size={size} hSize={hSize} sSize={sSize} gap={gap} top={top}>
      <p>{sub}</p>
      <h2>{main}</h2>
      <img src={img} alt="" />

      {imgSub && <p>{imgSub}</p>}
    </StyledCircle>
  );
};

export default Circle;
