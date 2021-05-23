import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderInner from '../molcules/header/HeaderInner'

const HeaderContainer = styled.header`
    height:70px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    position:fixed;
    z-index:100;

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
