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

const ParkDetail = () => {
    return (
        <>
            <DetailHead number="05" title="Park-it" content="parking App" leftText01="Branding" leftText02="Art Direction" leftText03="editotial Design" rightText="2021" />
            <Container>
                <Inner>
                    <DammyWrapper bgc="#D2C9F4" />
                </Inner>
            </Container>
        </>
    )
}

export default ParkDetail