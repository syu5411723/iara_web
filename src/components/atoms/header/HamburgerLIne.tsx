import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const HamburgerContainer = styled(Link)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    display:none;
    position:fixed;
    top:45px;
    right:5%;
    z-index:10;
    @media screen and (max-width:786px)  {
        display:flex;
    }

`
const HamburgerInner = styled(motion.div)`
    height:25px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const Line01 = styled(motion.div)`
    width:30px;
    height: 2px;
    border-radius:10px;
    background-color: #292929;
`
const Line02 = styled(motion.div)`
    width:30px;
    height: 2px;
    border-radius:10px;
    background-color: #292929;
`
const Line03 = styled(motion.div)`
    width:30px;
    height: 2px;
    border-radius:10px;
    background-color: #292929;
`
const line01V = {
    closed:{},
    open: {transform: "rotate(45deg) translate(6px, 10px)", transition:{type: "spring", stiffness: 260, damping: 20}},
}
const line02V = {
    closed:{},
    open: {opacity:0, x: "20px", transition:{type: "spring", stiffness: 260, damping: 20} }
}
const line03V = {
    closed: {},
    open: {transform: "rotate(-45deg) translate(6px, -10px )", transition:{type: "spring" , stiffness: 260, damping: 20}}
}


const HamburgerLIne = ({isOpen, handleChange}) => {
    return (
        <>
            <HamburgerContainer to="#" onClick={handleChange} >
                <HamburgerInner >
                    <Line01 
                        variants={line01V}
                        animate={isOpen ? "open" : "closed" }
                    />
                    <Line02 
                        variants={line02V}
                        animate={isOpen ? "open" : "closed" }
                    />
                    <Line03 
                        variants={line03V}
                        animate={isOpen ? "open" : "closed" }
                    />
                </HamburgerInner>
            </HamburgerContainer>
        </>
    )
}

export default HamburgerLIne
