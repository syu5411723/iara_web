import React from 'react'
import styled from 'styled-components'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import LibrarySubTitle from '../../molcules/design/subtitle/LibrarySubTitle'
import LibraryTitle from '../../molcules/design/title/LibraryTitle'

const Container = styled.div`

`


const Library = () => {
    return (
        <>
        <Container>
            <LibrarySubTitle />
            <LibraryTitle />
            <PageNumber pageNumber="7" />
            <Arrow  prevLink="/expo" nextLink="/" />
        </Container>
        </>
    )
}

export default Library
