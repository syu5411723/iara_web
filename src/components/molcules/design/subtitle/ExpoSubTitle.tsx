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

const ExpoSubTitle = () => {
    return (
        <>
            <Container>
                <Line 
                    variants={lineV}
                    animate="visible"
                    initial="hidden"
                />
                <SubTitleText subTitle="b" delay={1.34}/>
                <SubTitleText subTitle="r" delay={1.38} />
                <SubTitleText subTitle="a" delay={1.42} />
                <SubTitleText subTitle="n" delay={1.46} />
                <SubTitleText subTitle="d" delay={1.50} />
                <SubTitleText subTitle="i" delay={1.54} />
                <SubTitleText subTitle="n" delay={1.58} />
                <SubTitleText subTitle="g" delay={1.62} />
            </Container>
        </>
    )
}

export default ExpoSubTitle
