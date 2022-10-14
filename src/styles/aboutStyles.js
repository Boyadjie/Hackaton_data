import styled from "styled-components";

export const StyledAbout = styled.div`
  margin-top: 10rem;

  h1 {
    text-align: center;
  }

  .formcontainer {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
  }
  form {
    margin-top: 8rem;
    display: flex;
    gap: 1rem;
    width: 80%;

    text-align: center;

    flex-direction: column;

    // input:nth-child(1) {
    //   display: inline;

    //   color: red;
    // }
    // input:nth-child(2) {
    //   display: inline;
    //   width: 50%;
    //   display: inline;
    // }

    input {
      min-height: 60px;

      border-radius: 20rem;

      padding: 1rem;

      border: none;

      box-shadow: inset 0px 3px 8px #00000022;
    }

    .btn {
      width: 25%;

      display: flex;

      align-self: flex-end;

      justify-content: center;

      align-items: center;

      background-color: #86b8ba;

      box-shadow: 0px 3px 6px #00000022;

      color: white;

      font-size: 1.5rem;
    }

    textarea {
      box-shadow: inset 0px 3px 18px #00000022;
      min-height: 450px;
      border: none;
      border-radius: 2rem;
      padding: 1rem;
    }
    .firsts {
      gap: 5rem;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;

      input {
        width: 100%;
      }
    }
  }
`;

export const AboutBar = styled.div`
  background-color: ${(props) => props.color};
  width: 100vw;

  height: 334px;

  border-radius: 20px;

  display: flex;

  h2,
  p {
    color: white;

    max-width: 40rem;
  }

  h2 {
    margin-bottom: 2rem;

    font-size: 32px;
  }

  p {
    font-size: 16px;
    line-height: 2rem;

    font-weight: 300;
  }

  a {
    color: white;

    text-decoration: none;
  }

  .btn {
    background-color: #86b8ba;

    padding: 1rem 3rem;

    border-radius: 20rem;
  }

  .btncont {
    height: 60.9%;

    display: flex;

    align-items: flex-end;

    justify-content: center;
  }
  align-items: center;

  justify-content: center;

  gap: ${(props) => props.gap};
  ${(props) => (props.margin ? `margin : ${props.margin} 0 ;` : "")}
`;
