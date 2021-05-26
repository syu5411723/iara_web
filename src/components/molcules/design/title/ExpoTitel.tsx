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


const ExpoTitle = ({colorBool}) => {
    return (
        <>
            <TitleWrapper
                variants={titleV}
                animate={colorBool ? "hovered" : "unHover"}
            >
                <TitleText text="E" exitdelay={0.08} delay={1.08} />
                <TitleText text="X" exitdelay={0.06} delay={1.06} />
                <TitleText text="P" exitdelay={0.04} delay={1.04} />
                <TitleText text="O" exitdelay={0.02} delay={1.02} />
            </TitleWrapper>
        </>
    )
}

export default ExpoTitle