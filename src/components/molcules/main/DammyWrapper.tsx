import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const containerV ={
    hidden:{},
    visible: {},
    exit: {opacity: 1, transition:{delay:0.5}}
}

const DammyWrapper = ({bgc}) => {
    const DammyContainer = styled(motion.div)`
    width:100vw;
    height:900px;
    margin-bottom: 100vh;
    background-color: ${bgc};
`

    return (
        <>
            <DammyContainer 
                variants={containerV}
                exit="exit"
            />
        </>
    )
}

export default DammyWrapper
