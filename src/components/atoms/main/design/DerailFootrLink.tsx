import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const LinkWrapper = styled(motion.div)``
const ContetWrapper = LinkWrapper.withComponent(Link);
const TextWrapper = styled(motion.div)`
    line-height: 80px;
`
const Text = styled(motion.h1)`
    font-size: 100px;
    font-weight: bold;
    letter-spacing:2px;
`
const ArrowWrapper = styled(motion.div)`
    position:absolute;
    top:41%;
    right:7%;
    display:flex;
`
const Line = styled.div`
    width:15vw;
    height: 0.15em;
    background-color: #292929;
    margin-right: -21px;
`
const Arrow = styled.div`
    width:20px;
    height: 20px;
    border-top: 0.15em solid #292929;
    border-right: 0.15em solid #292929;
    transform:rotate(45deg);
    margin-top:-8px;
    
`
const textV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 1 } }
}
const arrowV = {
    hidden: { opacity: 0, x: "-50px" },
    visible: { opacity: 1, x: "0px", transition: { duration: 0.7, delay: 1.8 } }
}
const delayV = {
    hidden:{},
    visible:{},
    exit:{opacity:0, transition:{delay:2}},
}

const scrollTop = () => {
    window.scrollTo({top:0 , behavior: "smooth"});
}

const DerailFootrLink = ({nextLink}) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <ContetWrapper to={nextLink} onClick={scrollTop}
                variants={delayV}
            >
                <TextWrapper
                    ref={ref} inView={inView}
                    variants={textV}
                    animate={inView ? "visible" : "hidden"}
                >
                    <Text>next</Text>
                    <Text>project</Text>
                </TextWrapper>
                <ArrowWrapper
                    variants={arrowV}
                    animate={inView ? "visible" : "hidden"}
                >
                    <Line />
                    <Arrow />
                </ArrowWrapper>
            </ContetWrapper>
        </>
    )
}

export default DerailFootrLink
