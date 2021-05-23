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

const LibrarySubTitle = () => {
    return (
        <>
            <Container>
                <Line 
                    variants={lineV}
                    animate="visible"
                    initial="hidden"
                />
                <SubTitleText subTitle="i" delay={0.34}/>
                <SubTitleText subTitle="l" delay={0.38} />
                <SubTitleText subTitle="l" delay={0.42} />
                <SubTitleText subTitle="u" delay={0.46} />
                <SubTitleText subTitle="s" delay={0.50} />
                <SubTitleText subTitle="t" delay={0.54} />
                <SubTitleText subTitle="r" delay={0.58} />
                <SubTitleText subTitle="a" delay={0.62} />
                <SubTitleText subTitle="t" delay={0.66} />
                <SubTitleText subTitle="o" delay={0.70} />
                <SubTitleText subTitle="n" delay={0.74} />
            </Container>
        </>
    )
}

export default LibrarySubTitle
