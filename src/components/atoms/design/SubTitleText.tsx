import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Item = styled(motion.h2)`
    font-size: 40px;
    font-weight:100;
    font-family: 'Lora', serif;
`

const SubTitleText = ({subTitle, delay}) => {
    const itemV = {
        hidden:{opacity:0},
        visible:{opacity:1, transition:{duration:0.3, delay:`${delay}`}}
    }
    return (
        <>
        <Item
            variants={itemV}
            initial="hidden"
            animate="visible"
        >{subTitle}</Item>
        </>
    )
}

export default SubTitleText
