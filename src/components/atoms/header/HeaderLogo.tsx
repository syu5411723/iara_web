import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DelayLink from "react-delay-link"

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
                <Logo to="#" >
                    <DelayLink delay={550} to="/" >iara gurinspun</DelayLink>
                </Logo>
            </LogoContainer>
        </>
    )
}

export default HeaderLogo
