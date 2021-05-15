import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled(Link)`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 20px;
    letter-spacing:1px;
    color:#000;
    /* color:#fefefe; */
`


const HeaderLogo = () => {
    return (
        <>
            <Logo to="/">iara gurinspun</Logo>
        </>
    )
}

export default HeaderLogo
