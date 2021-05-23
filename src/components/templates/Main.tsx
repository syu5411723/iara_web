import React from 'react'
import styled from 'styled-components'
import Router from '../../router/Router'

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    position:relative;
`

const Main = ({ colorBool }) => {
    return (
        <>
            <MainContainer>

                <Router colorBool={colorBool} />
            </MainContainer>
        </>
    )
}

export default Main
