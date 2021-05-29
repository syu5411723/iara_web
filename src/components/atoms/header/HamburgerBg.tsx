import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'


const OpneContainer  = styled(motion.div)`
    position:fixed;
    width:400px;
    height:100vh;
    top:0;
    right:0;
    z-index:3;
    background-color: rgb(255,188,112);
`

const containerV = {
    closed:{x:"400px", },
    open:{x:"0px", transition:{duration:0.3}}
}

const HamburgerBg = ({isOpen, setOpen }) => {
    return (
        <>
        <OpneContainer
            variants={containerV}
            animate={isOpen ? "open" : "closed" }
        >
            <Menu isOpen={isOpen} setOpen={setOpen} />
        </OpneContainer>
        </>
    )
}

export default HamburgerBg
