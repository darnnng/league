import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    font-family: "Lucida Console";
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;

    min-height: 100vh;
    margin: 0 auto;
    padding: 96px 16px 20px;
    background: #a0c1e0;
  }
`;
