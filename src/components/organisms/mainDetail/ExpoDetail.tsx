﻿import React from 'react'
import styled from "styled-components"

import Img01 from "../../../images/filtro1.jpg"
import Img02 from "../../../images/filtro2.jpg"
import Img03 from "../../../images/filtro3.jpg"
import Img04 from "../../../images/filtro4.jpg"
import Img05 from "../../../images/filtro5.jpg"
import Img06 from "../../../images/filtro6.jpg"
import Img07 from "../../../images/filtro7.jpg"
import Img08 from "../../../images/filtro8.jpg"
import Img09 from "../../../images/filtro9.jpg"
import DetailFooter from '../design/DetailFooter'
import DetailHead from '../../molcules/main/DetailHead'
import DetailImgWrapper from '../../molcules/main/DetailImgWrapper'
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
                    <DetailFooter />
                </Inner>
            </Container>
        </>
    )
}

export default ExpoDetail