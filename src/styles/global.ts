import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --soft-blue: hsl(215, 51%, 70%);
        --cyan: hsl(178, 100%, 50%);
        --cyan-overlay: hsla(178, 100%, 50%, 0.5);

        --main-bg: hsl(217, 54%, 11%);
        --card-bg: hsl(216, 50%, 16%);
        --line: hsl(215, 32%, 27%);
    
        --white: hsl(0, 0%, 100%);

        --bold: 600;
        --regular: 400;
        --light: 300;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--main-bg);
        display: grid;
        font-size: 16px;
        place-items: center;
        min-height: 100vh;
    }

    body, input, button, textarea {
        font-family: 'Outfit', sans-serif;
    }
`;
