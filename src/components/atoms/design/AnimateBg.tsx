﻿import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { LinkRouter } from '../../../router/Router'

const Container = styled(motion.div)`
    position:absolute;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    z-index:1;
`
const BgSvg = styled(motion.svg)``
const Links = styled(Link)``

const linkV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition:{duration:1, delay:1} },
    exit: { opacity: 0, transition: { duration: 1 } }
}

const AnimateBg = ({ changeColor }) => {
    return (
        <>
            <Container>
                <BgSvg
                    viewBox="20 45 460 435"
                    width="60vw"
                    height="70vh"
                >
                    <Links to="/">
                        <LinkRouter changeColor={changeColor} />
                    </Links>
                </BgSvg>
            </Container>
        </>
    )
}

export default AnimateBg
