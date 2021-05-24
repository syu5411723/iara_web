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
    bottom:0%;
    left:20%;
    display:flex;
    z-index:10;
`
const titleV = {
    unHover: {color: "#292929"},
    hovered:{color:"#fff",transition:{duration:0.1}},
}

const FiltroTitle = ({colorBool}) => {
    return (
        <>

            <TitleWrapper
                variants={titleV}
                animate={colorBool ? "hovered" : "unHover"}
            >
                <TitleText text="F" exitdelay={0.12} delay={0.22} />
                <TitleText text="I" exitdelay={0.1}  delay={0.2}/>
                <TitleText text="L" exitdelay={0.08} delay={0.18} />
                <TitleText text="T" exitdelay={0.06} delay={0.16} />
                <TitleText text="R" exitdelay={0.04} delay={0.14} />
                <TitleText text="O" exitdelay={0.02} delay={0.12} />
            </TitleWrapper>
        </>
    )
}

export default FiltroTitle