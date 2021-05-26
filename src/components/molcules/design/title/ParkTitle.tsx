import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import TitleText from '../../../atoms/design/TitleText'

const TitleWrapper = styled(motion.div)`
    font-family: lustprodidone-no1uploadedfile,serif;
    color: #000;
    display: block;
    user-select: none;
    position:absolute;
    bottom:20%;
    left:20%;
    display:flex;
    z-index:10;
`
const titleV = {
    unHover: {color: "#292929"},
    hovered:{color:"#fff",transition:{duration:0.1}},
}

const ParkTitle = ({colorBool}) => {
    return (
        <>

        <TitleWrapper
            variants={titleV}
            animate={colorBool ? "hovered" : "unHover"}
        >
            <TitleText text="P" exitdelay={0.14} delay={1.24} />
            <TitleText text="A" exitdelay={0.12} delay={1.22} />
            <TitleText text="R" exitdelay={0.1}  delay={1.2}/>
            <TitleText text="K" exitdelay={0.08} delay={1.18} />
            <TitleText text="-" exitdelay={0.06} delay={1.16} />
            <TitleText text="I" exitdelay={0.04} delay={1.14} />
            <TitleText text="T" exitdelay={0.02} delay={1.12} />
        </TitleWrapper>
        </>
    )
}

export default ParkTitle