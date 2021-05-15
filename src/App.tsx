import React from 'react';
import "./App.scss"
import Footer from './components/templates/Footer';

import GlobalStyles from './GlobalStyles';
import { BrowserRouter } from "react-router-dom"
import Header from './components/templates/Header';
import Main from './components/templates/Main';
import styled from 'styled-components';
import Cursor from './components/atoms/design/Cursor';
import { Sample02 } from './Sample02';
import Router from './router/Router';

const Conrtainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
  height: 100vh;
`

function App() {
  return (
    <>

      <BrowserRouter>
      <Conrtainer>
        <GlobalStyles />
          <Header />
          <Main />
          <Footer />
          <Cursor />
          </Conrtainer>
      </BrowserRouter>
    </>
  );
}

export default App;
