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
