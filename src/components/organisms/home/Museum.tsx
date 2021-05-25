import React from 'react'
import styled from 'styled-components'
import ChangeLink from '../../atoms/design/ChangeLink'

import PageNumber from '../../molcules/design/PageNumber'
import MuseumSubTitle from '../../molcules/design/subtitle/MuseumSubTitle'
import MuseumTitle from '../../molcules/design/title/MuseumTitle'

const Container = styled.div`

`


const Museum = ({colorBool}) => {
    return (
        <>
        <Container>
            <ChangeLink />
            <MuseumSubTitle />
            <MuseumTitle colorBool={colorBool} />
            <PageNumber pageNumber="3" />
        </Container>
        </>
    )
}

export default Museum
