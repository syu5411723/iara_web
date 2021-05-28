import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const ContenteWrapper = styled(motion.div)`
    margin-bottom: 40px;
    line-height:3.3vw;
`

const ContetText = styled.p`
    font-size: 3.2vw;
    font-weight:800;
`
const V = {
    hidden: { opacity: 0, x: "100px" },
    visible: { opacity: 1, x: "0px", transition: { duration: 0.7, delay: 1.3 } }
}

const DetailContent = ({ content01, content02 }) => {
    return (
        <>
            <ContenteWrapper
                variants={V}
                initial="hidden"
                animate="visible"
            >
                <ContetText>{content01}</ContetText>
                <ContetText>{content02}</ContetText>
            </ContenteWrapper>
        </>
    )
}

export default DetailContent
