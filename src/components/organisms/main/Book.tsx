import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PrevArrow from '../../atoms/design/PrevArrow'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import BookSubTitle from "../../molcules/design/subtitle/BookSubTitle"
import BookTitle from '../../molcules/design/title/BookTitle'

const Container = styled.div`

`

const Book = () => {
    return (
        <>
        <Container>
            <BookSubTitle />
            <BookTitle />
            <PageNumber pageNumber="1" />
        </Container>
        </>
    )
}

export default Book
