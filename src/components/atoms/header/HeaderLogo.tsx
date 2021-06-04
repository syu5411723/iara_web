import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoContainer = styled.div``
const Logo = styled(Link)`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 20px;
    letter-spacing:1px;
`


const HeaderLogo = ({setColor}) => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setColor(false)
    }
    return (
        <>
            <LogoContainer onClick={scrollTop} >
                    <Logo to="/" >iara gurinspun</Logo>
            </LogoContainer>
        </>
    )
}

export default HeaderLogo
