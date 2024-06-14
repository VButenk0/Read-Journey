import { createGlobalStyle } from "styled-components";
import "./variables.css";

export const Global = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  
  color: var(--primary-text);
  font-family: "Gilroy Medium";
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.28px;

  background-color: var(--main-bg-color);

  min-width: 320px;
  max-width: 1440px;
  /* min-height: 100vh; */

  margin: 0 auto;

  @media only screen and (min-width: 1440px) {
     width: 1280px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
     width: 768px;
  }

  @media only screen and (max-width: 767px) {
     width: 375px;
  }
}

h1,
h1,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  color: inherit;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
}

input{
  background: transparent;
  border: none;
  outline: none;
}
`;

export default Global;
