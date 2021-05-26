import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import DetailContent from '../../atoms/main/design/DetailContent'
import DetailInfo from '../../atoms/main/design/DetailInfo'
import DetailNumber from '../../atoms/main/design/DetailNumber'
import DetaiTitle from '../../atoms/main/design/DetaiTitle'

const Sec01Container = styled.div`
    display:flex;
    justify-content:space-between;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:99;
`
const LeftContainer = styled.div`
    width:50%;
`
const RightContainer = styled(motion.div)`
    width:50%;
`
const RightInner = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
`

const DetailHead = ({number, title, content, leftText01, leftText02, leftText03, rightText }) => {
    return (
        <>
            <Sec01Container>
                <LeftContainer>
                    <DetailNumber number={number} />
                </LeftContainer>
                <RightContainer>
                    <RightInner>
                        <DetaiTitle title={title} />
                        <DetailContent content={content} />
                        <DetailInfo leftText01={leftText01} leftText02={leftText02} leftText03={leftText03} rightText={rightText} />
                    </RightInner>
                </RightContainer>
            </Sec01Container>
        </>
    )
}

export default DetailHead
