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
import { LinkRouter } from './router/Router';
// import Arrow from "./components/molcules/design/Arrow"


const Conrtainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
  height: 100vh;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Conrtainer>
          <Header />
          <Main />
          <LinkRouter />
          <ArrowRouter />
          <Footer />
          <Cursor />
        </Conrtainer>
      </BrowserRouter>
    </>
  );
}

export default App;
