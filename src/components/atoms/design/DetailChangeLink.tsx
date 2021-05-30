import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"


const ChangeWrapper = styled(motion.div)`
    background-color: #FFF2E0;
    width: 100vw;
    height: 100vh;
    width: 100vw;
    height: 100vh;
    position:absolute;
    top:0;
    left:0;
    z-index:2;
`

const WrapperV = {
    hidden:{opacity:1},
    visible: {opacity:1},
    exit: {opacity:1 , transition:{duration:0, delay:1.5}}
}
const DetailChangeLink = () => {
    return (
        <>
            <ChangeWrapper
                variants={WrapperV}
                initial="hidden"
                exit="exit"
            >
            </ChangeWrapper>
        </>
    )
}

export default DetailChangeLink
