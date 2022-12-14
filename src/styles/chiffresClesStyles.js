import styled from "styled-components";

export const StyledChiffresclé = styled.div`
  margin-top: 10rem;
  margin-bottom: 15rem;

  width: 100%;
  h1 {
    text-align: center;

    padding: 0rem 0 5rem 0;
  }
`;

export const Bigcirclecontainer = styled.div`
  margin-top: ${(props) => props.margin};
  ${(props) => (props.gap ? `gap : ${props.gap} ;` : "")}
  width: 100%;
  display: flex;

  justify-content: center;
  position: relative;
`;

export const Arrow = styled.img`
  position: absolute;

  top: 0;
  left: ${(props) => props.left};

  height: 5rem;
`;

export const Bar = styled.div`
  background-color: ${(props) => props.color};
  width: 100vw;

  height: 334px;

  border-radius: 20px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 75px;
  ${(props) => (props.margin ? `margin-top : ${props.margin};` : "")}
  div {
    translate: 0 90px;
  }
`;
