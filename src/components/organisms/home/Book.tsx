import React from 'react'
import styled from 'styled-components'

import ChangeLink from '../../atoms/design/ChangeLink'
import PageNumber from '../../molcules/design/PageNumber'
import BookSubTitle from "../../molcules/design/subtitle/BookSubTitle"
import BookTitle from '../../molcules/design/title/BookTitle'

const Container = styled.div`

`
const Links = styled.div`
position:absolute;
top:30%;
`

const Book = ({colorBool}) => {
    return (
        <>
        <Container>
            <ChangeLink />
            <BookSubTitle />
            <BookTitle colorBool={colorBool} />
            <PageNumber pageNumber="1" />
        </Container>
        </>
    )
}

export default Book
