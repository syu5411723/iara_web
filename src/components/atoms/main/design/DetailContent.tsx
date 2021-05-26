import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const ContetText = styled(motion.p)`
    font-size: 30px;
    font-weight:800;
    margin-bottom: 40px;
`
const V = {
    hidden:{opacity:0, x: "100px"},
    visible:{opacity:1, x: "0px", transition:{duration:0.7, delay:1.7}}
}

const DetailContent = ({content}) => {
    return (
        <>
            <ContetText
                variants={V}
                initial="hidden"
                animate="visible"
            >{content}</ContetText>
        </>
    )
}

export default DetailContent
