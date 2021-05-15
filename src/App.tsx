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


function App() {
  return (
    <>

      <BrowserRouter>
        <GlobalStyles />

          <Cursor />
          <Header />
          <Main />
          <Footer />


      </BrowserRouter>
      <Sample02 />
    </>
  );
}

export default App;
