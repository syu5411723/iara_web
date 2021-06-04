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
    margin-top: 30px;
`
const lineV = {
    hidden:{width:"0%"},
    visible: {width:"100px",transition:{duration:0.4, delay: 1}},
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
                <SubTitleText subTitle="e" delay={1.34}/>
                <SubTitleText subTitle="d" delay={1.38} />
                <SubTitleText subTitle="i" delay={1.42} />
                <SubTitleText subTitle="t" delay={1.46} />
                <SubTitleText subTitle="o" delay={1.51} />
                <SubTitleText subTitle="r" delay={1.54} />
                <SubTitleText subTitle="i" delay={1.58} />
                <SubTitleText subTitle="a" delay={1.62} />
                <SubTitleText subTitle="l" delay={1.66} />
            </Container>
        </>
    )
}

export default BookSubTitle
