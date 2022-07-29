import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
  
  *{
    box-sizing: border-box;
  }
  
  body {
  
  font-family: "Roboto", sans-serif;
  }
  ul{
    list-style-type: none;
  }
  
`;

export default GlobalStyle;
