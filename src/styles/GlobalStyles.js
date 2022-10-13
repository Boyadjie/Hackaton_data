import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --darkBlue: #19363b;
  --mediumBlue: #86B8BA;
  --lightBlue: #61A1AC;
  --shadow: #00000029;
  --lightGreen: #C0D0C8;
  --skin: #F8D5BC;
}

*{
  color: var(--darkBlue);
  font-family: 'Exo', sans-serif;
  font-weight: 500;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #F8F8F8;
}

main {
  padding: 0 80px;
}

`;
