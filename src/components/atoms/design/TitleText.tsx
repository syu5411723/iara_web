import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'


const Items = styled(motion.span)`
    font-size: 15vw;
    font-weight:lighter;
`

const TitleText = ({text, delay}) => {
    const itemV = {
        hidden:{opacity:0, x:"-60px"},
        visible:{opacity:1, x: "0px", transition:{duration:0.7, delay: `${delay}`}},
    } 
    
    return (
        <>
            <Items
                variants={itemV}
                initial="hidden"
                animate="visible"
                exit={{opacity:0, x: "60px", transition:{duratoin:0.7, delay:`${delay}` }}}
            >{text}</Items>
        </>
    )
}

export default TitleText
