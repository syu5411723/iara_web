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
import DetailFooter from '../design/DetailFooter'
import DetailHead from '../../molcules/main/DetailHead'
import DetailImgWrapper from '../../molcules/main/DetailImgWrapper'


const Container = styled.div`
    background-color: #FBE7E7;
    width:100vw;
    height:100vh;
    position: relative;
`  
const Inner = styled.div`
    width:100vw;
    max-width:1250px;
    margin:0 auto;
`

const FiltroDetail = () => {
    return (
        <>
            <DetailHead number="02" title="Filtro" content="Water Arts Festival" leftText01="Branding" leftText02="Art Direction" leftText03="Illustration" rightText="2021" />
            <Container>
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
// import React from 'react'
// import styled from 'styled-components'
// import ChangeLink from '../../atoms/design/ChangeLink'

// import PageNumber from '../../molcules/design/PageNumber'
// import FiltroSubTitle from '../../molcules/design/subtitle/FirtroSubTitle'
// import FiltroTitle from '../../molcules/design/title/FiltroTitle'

// const Container = styled.div`
//     width:100vw;
//     height:100vh;
//     position: relative;
// `

// const FiltroDetail = ({colorBool}) => {
//     return (
//         <>
//             <Container>
//                 <ChangeLink />
//                 <FiltroSubTitle />
//                 <FiltroTitle colorBool={colorBool} />
//                 <PageNumber pageNumber="2" />
//             </Container>
//         </>
//     )
// }

// export default FiltroDetail
