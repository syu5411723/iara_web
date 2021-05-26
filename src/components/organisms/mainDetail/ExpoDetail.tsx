import React from 'react'
import styled from "styled-components"

import DetailHead from '../../molcules/main/DetailHead'
import DammyWrapper from '../../molcules/main/DammyWrapper'


const Container = styled.div`
    background-color: #FBE7E7;
`
const Inner = styled.div`
    width:100vw;
    max-width:1250px;
    margin:0 auto;
`

const ExpoDetail = () => {
    return (
        <>
            <DetailHead number="06" title="Expo" content="Photograohic Exposition" leftText01="Art Direction" leftText02="university Project" leftText03="" rightText="2021" />
            <Container>
                <Inner>
                    <DammyWrapper bgc="#DFEDF1" />
                </Inner>
            </Container>
        </>
    )
}

export default ExpoDetail