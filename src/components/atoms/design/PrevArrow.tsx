import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ArrowWrapper = styled(Link)`
    display:flex;
    width:50px;
    height: 50px;
    padding-top:20px;
`
const Line = styled(motion.div)`
width:45px;
height: 2.5px;
background-color:#292929;
`
const PrevArrowButton = styled(motion.div)`
width: 20px;
height: 20px;
border-top: 2px solid #292929;
border-right:2px solid #292929;
transform:rotate(-135deg);
margin-right: -22px;
margin-top:-9px;
`


const PrevArrow = ({ prevLink }) => {
    return (
        <>
            <ArrowWrapper to={prevLink} >
                <PrevArrowButton />
                <Line />
            </ArrowWrapper>
        </>
    )
}

export default PrevArrow
