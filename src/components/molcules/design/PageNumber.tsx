import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    transform:rotate(90deg);
    width:60px;
    position: absolute;
    bottom:20%;
    right:27%;
    z-index:10;

`
const TextWrapper = styled.div`

`
const PageText = styled(motion.p)`
    font-size: 18px;
    font-weight: bold;
`
const Line = styled.div`
    width:7px;
    height: 0.08em;
    background-color:#292929;
    margin-top: 9px;
`
const Number = styled.p`
    font-size: 18x;
    font-weight: bold;
`
const wrapperV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 1.5 } },
    exit: { oapcity: 0, transition: { duraion: 1, delay: 1.5 } },

}

const pageTextV = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, y: "0px", transition: { duration: 0.4 } },
}

const PageNumber = ({ pageNumber }) => {
    return (
        <>
            <PageWrapper
                variants={wrapperV}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <TextWrapper>
                    <PageText

                    >{pageNumber}</PageText>
                </TextWrapper>
                <Line />
                <Number>7</Number>
            </PageWrapper>
        </>
    )
}

export default PageNumber
