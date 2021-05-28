import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Number = styled(motion.h1)`
    font-size: 37vw;
    font-weight:100;
    font-family: 'Lora', serif;
`
const numberV = {
    hidden: { opacity: 0, x: "-50%" },
    visible: {opacity:1, x: "-25%", transition: { duration: 0.6, delay: 0.8 } }
}

const DetailNumber = ({ number }) => {
    return (
        <>
            <Number
                variants={numberV}
                initial="hidden"
                animate="visible"
            >{number}</Number>
        </>
    )
}

export default DetailNumber
