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
  padding: 5px 80px;
  position: relative;
  background-color: var(--lightGreen);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  > a {
    img {
      width: 50%;
    }
  }

  > div {
    display: flex;
    gap: 20px;
    transform: translateX(100%);

    a {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      img {
        width: 80%;
      }
    }
  }
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

export const StyledNotFound = styled.div`
  margin-top: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  p {
    font-size: 40px;
  }

  .btn {
    display: block;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    color: white;
    padding: 20px 40px;
    border-radius: 30px;
    background: var(--mediumBlue);
    width: max-content;
    margin: 30px auto;
    box-shadow: 0px 6px 8px var(--shadow);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0px 8px 15px var(--shadow);
      padding: 20px 50px;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
    }
  }
`;
