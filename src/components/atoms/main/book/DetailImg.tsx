import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const imgV = {
    hidden:{opacity:0},
    visible:{opacity:1, transition:{duration:1, delay:0.2}}
}


const DetailImg = ({ img, height, maxHight }) => {
    const Img = styled(motion.div)`
        width:100%;
        height: ${height};
        max-height: ${maxHight};
        background:url(${img})no-repeat;
        background-size:cover;
        margin-bottom: 5vw;
    `
    return (
        <>
            <Img />
        </>
    )
}

export default DetailImg
