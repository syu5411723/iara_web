import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ChangeLink from '../../../atoms/design/ChangeLink'
import TitleText from '../../../atoms/design/TitleText'

const TitleWrapper = styled(motion.div)`
    font-family: lustprodidone-no1uploadedfile,serif;
    display: block;
    user-select: none;
    position:absolute;
    bottom:20%;
    left:20%;
    display:flex;
    z-index:10;
    color: #fff;
    color:#292929;
`
const titleV = {
    unHover: {color: "#292929"},
    hovered:{color:"#fff",transition:{duration:0.1}},
}


const BookTitle = ({colorBool}) => {
    return (
        <>
        {/* <ChangeLink /> */}
        <TitleWrapper 
            variants={titleV}
            animate={colorBool  ? "hovered" : "unHover" }
        >
            <TitleText text="B" exitdelay={0.08} delay={2.08}  />
            <TitleText text="O" exitdelay={0.06} delay={2.06}  />
            <TitleText text="O" exitdelay={0.04} delay={2.04}  />
            <TitleText text="K" exitdelay={0.02} delay={2.02}  />
        </TitleWrapper>
        </>
    )
}

export default BookTitle
