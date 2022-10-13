import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --darkBlue: #19363b;
  --lightBlue: #61A1AC;
  --shadow: #00000029;
}

*{

  margin: 0;
  padding: 0;
  color: var(--darkBlue);
  font-family: 'Exo', sans-serif;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

main {
  padding: 0 30px;
}

`;
