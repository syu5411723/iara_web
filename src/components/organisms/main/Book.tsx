import React from 'react'
import styled from 'styled-components'

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
            <Arrow prevLink="/library" nextLink="/filtro" />
        </Container>
        </>
    )
}

export default Book
