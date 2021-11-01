import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body, input, textarea, button {
        font-family: Roboto, sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 900;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        @media (max-width: 540px) {
            font-size: 70%;
        }
    }

    body {
        background: #121214;
        -webkit-font-smoothing: antialiased;
        color: #ffffff;
    }

    a {
        color: white;
        text-decoration: none;
        cursor:pointer;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.6);
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content{
        width:100%;
        max-width:576px;
        background: #212024;
        padding:3rem;
        position: relative;
        border-radius: 0.25rem;
        z-index: 9999;
    }

    .modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:0;
        background: transparent;
        transition: filter 0.3s;
        color:white;

        &:hover{
            filter: brightness(0.5);
        }
    }
`