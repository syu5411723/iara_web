import React from 'react';
import "./App.scss"

import GlobalStyles from './GlobalStyles';
import { BrowserRouter } from "react-router-dom"
import Header from './components/templates/Header';
import Main from './components/templates/Main';
import styled from 'styled-components';
import Cursor from './components/atoms/design/Cursor';
import FooterRouter from './router/FooterRouter';


const Conrtainer = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  width:100%;
  height:100%;
`

function App() {
  const [color, setColor] = React.useState(false)
  const colorChange = () => setColor(!color);
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Conrtainer>
          <Header  setColor={setColor} />
          <Cursor />
          <Main colorBool={color} changeColor={colorChange} />
          <FooterRouter />
        </Conrtainer>
      </BrowserRouter>
    </>
  );
}

export default App;
