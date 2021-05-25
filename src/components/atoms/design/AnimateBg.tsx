import { motion } from 'framer-motion'
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

const AnimateBg = ({ changeColor , detailLink }) => {
    return (
        <>
            <Container>
                <BgSvg
                    viewBox="20 45 460 435"
                    width="60vw"
                    height="70vh"
                >
                    <Links to={detailLink}>
                        <LinkRouter changeColor={changeColor} />
                    </Links>
                </BgSvg>
            </Container>
        </>
    )
}

export default AnimateBg
