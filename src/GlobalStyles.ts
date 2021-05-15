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
        /* color:#000; */
    }
    li{
        list-style:none;
    }
    body{ 
        background-color: #FFF2E0;
        /* background-color: #000; */
        
        color: #292929;
        font-family: Roboto,sans-serif;
        font-weight: 300;
        height: 100vh;
        width: 100vw;
    }
    .cursor {

        width: 40px;
  height: 40px;
  border: 2px solid #fff;
  background-color: #fff;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition:all 150ms ease;
  transition-property:opacity, background-color, transform, mix-blend-mode;
    /* width: 40px;
    height: 40px;
    border:1px solid #fff;
    background-color: #fff;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: all  0.2s ease;
    transition-property: opacity, transform, background-color, mix-blend-mode; */
    }
    .cursor--hidden {
        opacity: 0;
    }
    .cursor--clicked {
        transform: translate(-50%,-50%) scale(0.9);
        background-color: #fefefe;
    }
    .cursor--link-hovered {
        transform:translate(-50%, -50%) scale(3);
        /* background-color:#fff; */
    }
`