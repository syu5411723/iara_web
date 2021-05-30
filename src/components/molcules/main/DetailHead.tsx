import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import DetailChangeLink from '../../atoms/design/DetailChangeLink'
import DetailContent from '../../atoms/main/design/DetailContent'
import DetailInfo from '../../atoms/main/design/DetailInfo'
import DetailNumber from '../../atoms/main/design/DetailNumber'
import DetaiTitle from '../../atoms/main/design/DetaiTitle'

const HeadContainer = styled(motion.div)`
    height: 100vh;
    width:100vw;
    position:absolute;
    background-color: #FFF2E0;
    top:0;
    left:0;
    z-index:99;
`
const HeadInner = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    height:100vh;
    width:100vw;
`
const LeftContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const RightContainer = styled(motion.div)`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left: 5vw;
`

const RightInner = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
`
const wrapperOpacityV = {
    hidden: { opacity: 1 },
    visible: { opaciaty: 1 },
    exit: { opacity: 0, transition: { duration: 0.25, delay: 0 } }
}


const DetailHead = ({ number, title, content01, content02, leftText01, leftText02, leftText03, rightText }) => {
    return (
        <>
            <DetailChangeLink />
            <HeadContainer>
                <HeadInner
                    variants={wrapperOpacityV}
                    initial={false}
                    exit="exit"
                >
                    <LeftContainer>
                        <DetailNumber number={number} />
                    </LeftContainer>
                    <RightContainer>
                        <RightInner>
                            <DetaiTitle title={title} />
                            <DetailContent content01={content01} content02={content02} />
                            <DetailInfo leftText01={leftText01} leftText02={leftText02} leftText03={leftText03} rightText={rightText} />
                        </RightInner>
                    </RightContainer>
                </HeadInner>
            </HeadContainer>
        </>
    )
}

export default DetailHead
