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

const LibraryDetail = () => {
    return (
        <>
            <DetailHead number="07" title="Library" content="Illustrated Library for Despegar" leftText01="Branding" leftText02="Art Direction" leftText03="Illustration" rightText="2021" />
            <Container>
                <Inner>
                    <DammyWrapper bgc="#F1E8D5" />
                </Inner>
            </Container>
        </>
    )
}

export default LibraryDetail