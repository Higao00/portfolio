import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    html, body{
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.body_transparent};

        @media (min-width: 1280px) {
            overflow: hidden;
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

    @font-face {
        font-family: 'bold';
        src: url("/assets/fonts/bold.ttf") format('truetype');
    }

    @font-face {
        font-family: 'light';
        src: url("/assets/fonts/light.ttf") format('truetype');
    }

    @font-face {
        font-family: 'medium';
        src: url("/assets/fonts/medium.ttf") format('truetype');
    }

    @font-face {
        font-family: 'regular';
        src: url("/assets/fonts/regular.ttf") format('truetype');
    }

`
