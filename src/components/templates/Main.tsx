import React from 'react'
import styled from 'styled-components'
import Router from '../../router/Router'

const MainContainer = styled.div`
    width: 100%;
    height: 80%;

`

const Main = () => {
    return (
        <>
            <MainContainer></MainContainer>
                <Router />
        </>
    )
}

export default Main
