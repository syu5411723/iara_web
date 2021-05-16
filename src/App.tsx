import React from 'react';
import "./App.scss"
import Footer from './components/templates/Footer';

import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import Header from './components/templates/Header';
import Main from './components/templates/Main';
import styled from 'styled-components';
import Cursor from './components/atoms/design/Cursor';
import Arrow from './components/molcules/design/Arrow';
import ArrowRouter from './router/RouterArrow';
import { AnimatePresence } from 'framer-motion';
// import Arrow from "./components/molcules/design/Arrow"


const Conrtainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
  height: 100vh;
`
const Dammy = styled(Link)`
    font-size:50px;
    position:absolute;
    top:-0%;
    left:40%;
`
const LinkWrapper = styled.div`
    display:flex;
    width: 200px;
    height:50px;
    margin:0 auto;
    justify-content:space-between;
    align-items:center;
    position:absolute;
    bottom:0%;
    left:15%;
`
const LinkWrapper01 = styled.div`

`
const LinkWrapper02 = styled.div`

`

const SampleLink = styled(Link)`
    font-size: 30px;
`


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Conrtainer>
          <Header />
          <Main />
          <ArrowRouter />
          <Footer />
          <Cursor />
        </Conrtainer>
      </BrowserRouter>
    </>
  );
}

export default App;
