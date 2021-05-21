import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const InfoContaienr = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    width: 200px;
`
const Infoleft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
const InfoRight = styled.div`

`
const InfoText = styled(motion.p)`
    font-size:13px;
    font-family: andale_monoregular,sans-serif;
    margin-bottom: 5px;
`

const V = {
    hidden:{opacity:0, x: "100px"},
    visible:{opacity:1, x: "0px", transition:{duration:0.7, delay:0.8}}
}

const DetailInfo = ({leftText01, leftText02, leftText03, rightText}) => {
    return (
        <>
            <InfoContaienr
                variants={V}
                initial="hidden"
                animate="visible"
            >
                <Infoleft>
                    <InfoText>{leftText01}</InfoText>
                    <InfoText>{leftText02}</InfoText>
                    <InfoText>{leftText03}</InfoText>
                </Infoleft>
                <InfoRight>
                    <InfoText>{rightText}</InfoText>
                </InfoRight>
            </InfoContaienr>
        </>
    )
}

export default DetailInfo
