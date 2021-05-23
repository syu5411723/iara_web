import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { LinkRouter } from '../../../router/Router'

const Container = styled.div`
    position:absolute;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    z-index:1;
`
const BgSvg = styled(motion.svg)``
const Links = styled(Link)``

const svgV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 3 } },
    exit: { opacity: 0, transiton: { duration: 0.5 } }
}


const AnimateBg = ({ changeColor }) => {
    return (
        <>
            <Container>
                <BgSvg
                                viewBox="20 45 460 435"
                                width="600"
                                height="100%"
                                variants={svgV}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
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
