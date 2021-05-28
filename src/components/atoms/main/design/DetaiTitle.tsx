import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Title = styled(motion.h1)`
    font-size: 9vw;
    font-weight: 100;
    margin-bottom: 30px;
    font-family: 'Lora', serif;
`
const V = {
    hidden:{opacity:0, x: "100px"},
    visible:{opacity:1, x: "0px", transition:{duration:0.7, delay:1.1}}
}

const DetaiTitle = ({title}) => {
    return (
        <>
            <Title
                variants={V}
                initial="hidden"
                animate="visible"
            >{title}
            </Title>

        </>
    )
}

export default DetaiTitle
