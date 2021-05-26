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

const MuseumDetail = () => {
    return (
        <>
            <DetailHead number="03" title="Museum" content="The Design Museum" leftText01="UX/UI" leftText02="Content" leftText03="Art Direction" rightText="2021" />
            <Container>
                <Inner>
                    <DammyWrapper bgc="#F5F5F5" />
                </Inner>
            </Container>
        </>
    )
}

export default MuseumDetail