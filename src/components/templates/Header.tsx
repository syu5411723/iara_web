import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderInner from '../molcules/header/HeaderInner'

const HeaderContainer = styled.header`
    height:70px;
    display:flex;
    align-items:flex-end;
` 
const Dammy = styled(Link)`
    font-size:50px;
`

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderInner />
            </HeaderContainer>

        </>
    )
}

export default Header
