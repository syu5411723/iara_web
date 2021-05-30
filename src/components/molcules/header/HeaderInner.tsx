import React from 'react'
import styled from 'styled-components'
import Hamburger from "./Hamburger"
import HeaderLogo from '../../atoms/header/HeaderLogo'

const HeaderInnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:90%;
    margin:0 auto;
`

const HeaderInner = ({setColor}) => {
    return (
        <>
            <HeaderInnerWrapper>
                <HeaderLogo setColor={setColor} />
                <Hamburger />
            </HeaderInnerWrapper>
        </>
    )
}

export default HeaderInner
