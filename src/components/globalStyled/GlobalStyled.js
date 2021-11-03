import bgImg from "../../imagens/bg.jpeg";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
        body {
        color:#332c36;
        padding: 0;
        margin:0;
        fontFamily:New Tegomin;
        background: url(${bgImg}) center no-repeat;
        backgroundSize:cover;
        }
        `
;

