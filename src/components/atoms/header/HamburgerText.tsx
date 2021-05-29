import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"


const Project = styled.div`
    @media screen and (max-width: 786px) {
        display:none
    }
`
const FromLink = styled.p`
    color:#000;
    font-weight: bold;
`

const HamburgerText = () => {
    return (
        <>
            <Project>
                <FromLink>projects</FromLink>
            </Project>
        </>
    )
}

export default HamburgerText
