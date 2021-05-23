import React from 'react'
import styled from 'styled-components'

import PageNumber from '../../molcules/design/PageNumber'
import LibrarySubTitle from '../../molcules/design/subtitle/LibrarySubTitle'
import LibraryTitle from '../../molcules/design/title/LibraryTitle'

const Container = styled.div`

`


const Library = ({colorBool}) => {
    return (
        <>
        <Container>
            <LibrarySubTitle />
            <LibraryTitle colorBool={colorBool} />
            <PageNumber pageNumber="7" />
        </Container>
        </>
    )
}

export default Library
