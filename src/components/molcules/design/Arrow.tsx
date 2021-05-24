import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import NextArrow from '../../atoms/design/NextArrow'
import PrevArrow from '../../atoms/design/PrevArrow'

const ArrowWrapper = styled(motion.div)`
    width: 60vw;
    height: 15vh;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
`
const arrowV = {
    hidden:{opacity:0},
    visible: {opacity:1},
    exit:{opacity:0, transition:{duration:0, delay:1.8}}
}

const Arrow = ({prevLink, nextLink}) => {
    return (
        <>
            <ArrowWrapper
                variants={arrowV}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <PrevArrow prevLink={prevLink} />
                <NextArrow nextLink={nextLink}/>
            </ArrowWrapper>
        </>
    )
}

export default Arrow
