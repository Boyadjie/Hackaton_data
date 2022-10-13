import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 15px 80px;
  box-shadow: 0px 3px 15px var(--shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1000;

  nav {
    display: flex;
    gap: 40px;
    width: max-content;

    a {
      text-decoration: none;
      font-size: 24px;

      &.current {
        color: var(--lightBlue);
      }
    }
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 15px 80px;
  background-color: blue;
  position: relative;
  z-index: 1000;
`;

export const StyledCircle = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;

  ${(props) => (props.top ? `translate : 0 ${props.top};` : "")}
  background-color: white;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: ${(props) => props.gap};

  z-index: 0;
  box-shadow: 0px 3px 16px var(--shadow);
  h2 {
    font-size: ${(props) => props.hSize};
    color: black;

    text-align: center;
  }

  p {
    font-size: ${(props) => props.sSize};
    width: 50%;
    text-align: center;
  }

  p:first-child {
    margin-top: 1rem;
  }

  img {
    width: 60%;
    max-height: 40%;

    object-fit: contain;
  }
`;
