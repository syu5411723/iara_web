import React from 'react'
import styled from 'styled-components'
import Router from '../../router/Router'

const MainContainer = styled.main`
    width: 100vw;
    height: 80vh;
    position:relative;
`

const Main = () => {
    return (
        <>
            <MainContainer>
                <Router />
            </MainContainer>
        </>
    )
}

export default Main
