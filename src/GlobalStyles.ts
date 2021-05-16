import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    .cursor {
        width: 40px;
        height: 40px;
        border: 2px solid #fff;
        background-color:#fff;
        border-radius: 100%;
        position: fixed;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: all 0.3s ease;
        transition-property:  opacity, background-color, transform, mix-blend-mode;
    }
    .cursor--hidden {
        opacity:0;
    }
    .cursor--clicked {
        transform: translate(-50%, -50%) scale(0.85);
        background-color: #fefefe;
    }
    .cursor--link-hovered {
        transform: translate(-50%, -50%) scale(3);
        background-color: #fefefe;
    }
    a {
        color: #292929;
        text-decoration:none;
    }
    html, body {
        cursor: none;
        background-color: #FFF2E0;
        color: #292929;
        font-family: Roboto,sans-serif;
        font-weight: 300;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        cursor:none;
    }
`


