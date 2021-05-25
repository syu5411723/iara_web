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
    visible: {width:"100px",transition:{duration:0.4, delay:1}},
}

const ParkSubTitle = () => {
    return (
        <>
            <Container>
                <Line 
                    variants={lineV}
                    animate="visible"
                    initial="hidden"
                />
                <SubTitleText subTitle="u" delay={1.34}/>
                <SubTitleText subTitle="x" delay={1.38} />
                <SubTitleText subTitle="/" delay={1.42} />
                <SubTitleText subTitle="u" delay={1.46} />
                <SubTitleText subTitle="i" delay={1.48} />
            </Container>
        </>
    )
}

export default ParkSubTitle
