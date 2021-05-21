import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const ContentWrapper = styled(motion.div)`
    font-size: 16px;
    font-weight: bold;
`

const Content01 = styled.div`
    border-bottom:1px solid #292929;
    width:50px;
    margin-bottom: 15px;
`
const Content02 = styled.div`
    border-bottom:1px solid #292929;
    width: 135px;
    margin-bottom: 15px;
`
const Content03 = styled.div`
    border-bottom:1px solid #292929;

`

const wrapperV = {
    hidden:{opacity:0, x: "-100px"},
    visible:{opacity:1 ,x: "0px", transition:{duration:0.7, delay:0.1}}
}

const DetailFooterContent = ({text01, text02, text03}) => {
    const [ref, inView] = useInView({
        rootMargin:"-100px 0px",
        triggerOnce:true,
    });
    return (
        <>
            <ContentWrapper
                ref={ref} inView={inView}
                variants={wrapperV}
                animate={inView ? "visible" : "hidden"}
            >
                <Content01>{text01}</Content01>
                <Content02>{text02}</Content02>
                <Content03>{text03}</Content03>
            </ContentWrapper>
        </>
    )
}

export default DetailFooterContent
