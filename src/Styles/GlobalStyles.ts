import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  *, button, input {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none
  }

  :root {
    --javascript: #f1e05a;
    --typescript: #2b7489;
    --css: #563d7c;
  }
`;
