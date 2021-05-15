import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        cursor:none;
    }
    a{
        text-decoration:none;
    }
    li{
        list-style:none;
    }
    body{ 
        background-color: #FFF2E0;
        color: #292929;
        font-family: Roboto,sans-serif;
        font-weight: 300;
        height: 100vh;
        width: 100vw;
    }
    .cursor {
    /* width: 40px;
    height: 40px;
    background-color: #000;
    border-radius: 100%;
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: all 0.5s ease;
    transition-property: opacity, background-color, transform, mix-blend-mode; */
    position: fixed;
    width: 30px;
    height: 30px;
    top: -50%;
    left: -50%;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.2s ease-out;
    mix-blend-mode: difference;
    z-index: 1000;
    pointer-events: none;
    }
    .cursor--hidden {
        opacity: 0;
    }
    .cursor--clicked {
        transform: translate(-50%,-50%) scale(0.9);
        background-color: #000;
    }
    .cursor--link-hovered {
        transform:translate(-50%, -50%) scale(3);
        background-color:#000;
    }
`