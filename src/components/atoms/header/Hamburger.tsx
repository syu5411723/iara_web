import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"


const Project = styled.div``
const FromLink = styled.p`
    color:#000;
    font-weight: bold;
`

const HamburgerConrainer = styled.div``
const Line01 = styled.div``
const Line02 = styled.div``
const Line03 = styled.div``

const Hamburger = () => {
    return (
        <>
            <Project>
                <FromLink>projects</FromLink>
            </Project>
        </>
    )
}

export default Hamburger
