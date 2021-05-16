import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Router from '../../router/Router'
import Arrow from '../molcules/design/Arrow'

const MainContainer = styled.main`
    width: 100%;
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
