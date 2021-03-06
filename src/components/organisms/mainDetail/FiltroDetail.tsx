import { motion } from 'framer-motion'
import React from 'react'
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
import DetailImgWrapper from '../../molcules/main/DetailImgWrapper'


const Container = styled(motion.div)`
    background-color: #FBE7E7;
    margin-bottom: 100vh;
`
const Inner = styled.div`
    width:100%;
    max-width:1250px;
    margin:0 auto;
`

const containerV ={
    hidden:{},
    visible: {},
    exit: {opacity: 1, transition:{delay:0.6}}
}


const FiltroDetail = () => {
    return (
        <>
            <Container
                variants={containerV}z
                exit="exit"
            >
                <Inner>
                    <DetailImgWrapper img={Img01} height="60vw" maxHeight="700px" />
                    <DetailImgWrapper img={Img02} height="50vw" maxHeight="550px" />
                    <DetailImgWrapper img={Img03} height="90vw" maxHeight="1070px" />
                    <DetailImgWrapper img={Img04} height="180vw" maxHeight="2300px" />
                    <DetailImgWrapper img={Img05} height="130vw" maxHeight="1620px" />
                    <DetailImgWrapper img={Img06} height="60vw" maxHeight="600px" />
                    <DetailImgWrapper img={Img07} height="125vw" maxHeight="1600px" />
                    <DetailImgWrapper img={Img08} height="56vw" maxHeight="700px" />
                    <DetailImgWrapper img={Img09} height="75vw" maxHeight="970px" />
                </Inner>
            </Container>
        </>
    )
}

export default FiltroDetail