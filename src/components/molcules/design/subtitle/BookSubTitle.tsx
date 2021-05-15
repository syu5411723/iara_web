import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SubTitleText from '../../../atoms/design/SubTitleText'

const Container = styled(motion.div)`
    position:absolute;
    top:5%;
    display:flex;
    margin-left: 20vw;
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

const BookSubTitle = () => {
    return (
        <>
            <Container>
                <Line 
                    variants={lineV}
                    animate="visible"
                    initial="hidden"
                />
                <SubTitleText subTitle="e" delay={0.34}/>
                <SubTitleText subTitle="d" delay={0.38} />
                <SubTitleText subTitle="i" delay={0.42} />
                <SubTitleText subTitle="t" delay={0.46} />
                <SubTitleText subTitle="o" delay={0.50} />
                <SubTitleText subTitle="r" delay={0.54} />
                <SubTitleText subTitle="i" delay={0.58} />
                <SubTitleText subTitle="a" delay={0.62} />
                <SubTitleText subTitle="l" delay={0.66} />
            </Container>
        </>
    )
}

export default BookSubTitle
