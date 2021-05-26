import React from 'react'
import styled from 'styled-components'
import Router, { AnimateRouter } from '../../router/Router'

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position:relative;
    z-index:2;
    background-color: #FFF2E0;
`

const Main = ({ colorBool, changeColor }) => {
    return (
        <>
            <MainContainer>
                <Router colorBool={colorBool} />
                <AnimateRouter changeColor={changeColor} />
            </MainContainer>
        </>
    )
}

export default Main
