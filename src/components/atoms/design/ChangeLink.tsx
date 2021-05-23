import React from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"

const SwitchWrapper = styled(motion.div)`
    background-color: #FFF2E0;
    height:100vh;
    width:100vw;
    position:fixed;
    top:0;
    left:0;
    z-index:90;
` 
const switchV = {
    hidden:{x:"-100vw"},
    visible:{x:"-100vw"},
    exit:{x:"0", transition:{duration:1, delay:0.7}},
}


const ChangeLink = () => {
    return (
        <>
            <SwitchWrapper
                variants={switchV}
                initial="hidden"
                animate="visible"
                exit="exit"
            ></SwitchWrapper>
        </>
    )
}

export default ChangeLink
