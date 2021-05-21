import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Router from '../../router/Router'
import AnimateBg from '../atoms/design/AnimateBg'
import Arrow from '../molcules/design/Arrow'

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    position:relative;
`

const Main = () => {
    return (
        <>

            <MainContainer>
                {/* <AnimateBg /> */}
                <Router />
            </MainContainer>
        </>
    )
}

export default Main
