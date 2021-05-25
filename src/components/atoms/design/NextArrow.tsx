import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const ArrowWrapper = styled(motion.div)`
    display:flex;
    width:50px;
    height: 50px;
    padding-top:20px;
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
const arrowV = {
    hidden:{opacity:0},
    visible:{opacity:1, transition:{duration:0.7, delay:1.5}},
    exit:{opacity:0, transition:{duration:0, delay:1.7}},
}


const NextArrow = () => {
    return (
        <>
            <ArrowWrapper
                variants={arrowV}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Line />
                <NextArrowButton />
            </ArrowWrapper>
        </>
    )
}

export default NextArrow
