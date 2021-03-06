import { motion } from 'framer-motion'
import React from 'react'
import styled from "styled-components"

import Img01 from "../../../images/1.jpg"
import Img02 from "../../../images/2.jpg"
import Img03 from "../../../images/3.jpg"
import Img04 from "../../../images/4.jpg"
import Img05 from "../../../images/5.jpg"
import Img06 from "../../../images/6.jpg"
import Img07 from "../../../images/7.jpg"
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

const BookDetail = () => {
    return (
        <>
            <Container
                variants={containerV}
                exit="exit"
            >
                <Inner>
                    <DetailImgWrapper img={Img01} height="40vw" maxHeight="500px" />
                    <DetailImgWrapper img={Img02} height="65vw" maxHeight="860px" />
                    <DetailImgWrapper img={Img03} height="30vw" maxHeight="400px" />
                    <DetailImgWrapper img={Img04} height="65vw" maxHeight="800px" />
                    <DetailImgWrapper img={Img05} height="120vw" maxHeight="1500px" />
                    <DetailImgWrapper img={Img06} height="153vw" maxHeight="1900px" />
                    <DetailImgWrapper img={Img07} height="100vw" maxHeight="1100px" />
                </Inner>
            </Container>

        </>
    )
}

export default BookDetail