import React from 'react';

import {StyledCircle} from '../styles/Style'


const Circle = ({size , main , img , sub , hSize , sSize}) => {
    return (
        <StyledCircle size={size} hSize={hSize} sSize={sSize}>
            <p>{sub}</p>
            <h2>{main}</h2>
            <img src={img} alt="" />
        </StyledCircle>
    );
}

export default Circle;
