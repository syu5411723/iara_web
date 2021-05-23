import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SubTitleText from '../../../atoms/design/SubTitleText'

const Container = styled(motion.div)`
    position:absolute;
    top:10%;
    display:flex;
    margin-left: 20vw;
    z-index:10;
`
const Line = styled(motion.div)`
    height: 1px;
    background-color:#000;
    margin-right: 20px;
    margin-top: 20px;
`
const lineV = {
    hidden:{width:"0%"},
    visible: {width:"100px",transition:{duration:0.4}},
}

const MuseumSubTitle = () => {
    return (
        <>
            <Container>
                <Line 
                    variants={lineV}
                    animate="visible"
                    initial="hidden"
                />
                <SubTitleText subTitle="u" delay={0.34}/>
                <SubTitleText subTitle="x" delay={0.38} />
                <SubTitleText subTitle="u" delay={0.42} />
                <SubTitleText subTitle="i" delay={0.46} />
            </Container>
        </>
    )
}

export default MuseumSubTitle
