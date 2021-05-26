import React from 'react'
import styled from 'styled-components'
import ChangeLink from '../../atoms/design/ChangeLink'

import PageNumber from '../../molcules/design/PageNumber'
import LibrarySubTitle from '../../molcules/design/subtitle/LibrarySubTitle'
import LibraryTitle from '../../molcules/design/title/LibraryTitle'

const Container = styled.div`
    width:100vw;
    height:100vh;
    position: relative;
`


const Library = ({colorBool}) => {
    return (
        <>
        <Container>
            <ChangeLink />
            <LibrarySubTitle />
            <LibraryTitle colorBool={colorBool} />
            <PageNumber pageNumber="7" />
        </Container>
        </>
    )
}

export default Library
