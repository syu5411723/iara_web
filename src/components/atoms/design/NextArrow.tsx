import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ArrowWrapper = styled(Link)`
    display:flex;
`
const Line = styled(motion.div)`
    width:45px;
    height: 2.5px;
    background-color:#000;
`
const NextArrowButton = styled(motion.div)`
    width: 20px;
    height: 20px;
    border-top: 2px solid #000;
    border-right:2px solid #000;
    transform:rotate(45deg);
    margin-left: -22px;
    margin-top:-9px;
`


const NextArrow = ({nextLink}) => {
    return (
        <>
            <ArrowWrapper to={nextLink} >
                <Line />
                <NextArrowButton />
            </ArrowWrapper>
        </>
    )
}

export default NextArrow
