﻿import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import TitleText from '../../../atoms/design/TitleText'

const TitleWrapper = styled(motion.div)`
    font-family: lustprodidone-no1uploadedfile,serif;
    color: #000;
    display: block;
    user-select: none;
    position:absolute;
    bottom:0%;
    left:20%;
    display:flex;
    z-index:10;
`
const titleV = {
    unHover: {color: "#292929"},
    hovered:{color:"#fff",transition:{duration:0.1}},
}


const ExpoTitle = ({colorBool}) => {
    return (
        <>
            <TitleWrapper
                variants={titleV}
                animate={colorBool ? "hovered" : "unHover"}
            >
                <TitleText text="E" delay={0.08} />
                <TitleText text="X" delay={0.06} />
                <TitleText text="P" delay={0.04} />
                <TitleText text="O" delay={0.02} />
            </TitleWrapper>
        </>
    )
}

export default ExpoTitle