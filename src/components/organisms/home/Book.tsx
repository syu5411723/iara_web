import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AnimateBg from '../../atoms/design/AnimateBg'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import BookSubTitle from "../../molcules/design/subtitle/BookSubTitle"
import BookTitle from '../../molcules/design/title/BookTitle'

const Container = styled.div`

`
const Links = styled.div`
position:absolute;
top:30%;
`

const Book = () => {
    return (
        <>
        <Container>
            {/* <Links to="/book/detail" >tetetet</Links> */}
            {/* <AnimateBg /> */}
            <BookSubTitle />
            <BookTitle />
            <PageNumber pageNumber="1" />
        </Container>
        </>
    )
}

export default Book
