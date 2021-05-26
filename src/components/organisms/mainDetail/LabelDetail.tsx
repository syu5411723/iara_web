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

const LabelDetail = () => {
    return (
        <>
            <DetailHead number="04" title="Label-L" content="Concept Project" leftText01="Art Direction" leftText02="Illustration" leftText03="" rightText="2021" />
            <Container>
                <Inner>
                    <DammyWrapper bgc="#FFF4CE" />
                </Inner>
            </Container>
        </>
    )
}

export default LabelDetail