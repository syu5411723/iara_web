import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    transform:rotate(90deg);
    color:#000;
    width:60px;
    position: absolute;
    bottom:20%;
    right:30%;
    z-index:10;

`
const TextWrapper = styled(motion.div)`

`
const PageText = styled.p`
    font-size: 18px;
    font-weight: bold;
`
const Line = styled.div`
    width:7px;
    height: 0.08em;
    background-color:#000;
    margin-top: 9px;
`
const Number = styled.p`
    font-size: 18x;
    font-weight: bold;
`

const pageTextV = {
    hidden: { opacity: 0, y: "-20px" },
    visible: { opacity: 1, y: "0px", transition: { duration: 0.4 } },
}

const PageNumber = ({ pageNumber }) => {
    return (
        <>
            <PageWrapper>
                <TextWrapper
                    variants={pageTextV}
                    initial="hidden"
                    animate="visible"
                    exit={{opacity:0, y:"20px", transition:{duration:0.4}}}
                >
                    <PageText>{pageNumber}</PageText>
                </TextWrapper>
                <Line />
                <Number>7</Number>
            </PageWrapper>
        </>
    )
}

export default PageNumber
