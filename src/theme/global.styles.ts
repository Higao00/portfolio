import { createGlobalStyle } from "styled-components"
import bold from "../../public/assets/fonts/bold.ttf"
import light from "../../public/assets/fonts/light.ttf"
import medium from "../../public/assets/fonts/medium.ttf"
import regular from "../../public/assets/fonts/regular.ttf"

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
        src: url(${bold}) format('truetype');
    }

    @font-face {
        font-family: 'light';
        src: url(${light}) format('truetype');
    }

    @font-face {
        font-family: 'medium';
        src: url(${medium}) format('truetype');
    }

    @font-face {
        font-family: 'regular';
        src: url(${regular}) format('truetype');
    }

`
