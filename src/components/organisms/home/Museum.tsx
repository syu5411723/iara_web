import React from 'react'
import styled from 'styled-components'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import MuseumSubTitle from '../../molcules/design/subtitle/MuseumSubTitle'
import MuseumTitle from '../../molcules/design/title/MuseumTitle'

const Container = styled.div`

`


const Museum = () => {
    return (
        <>
        <Container>
            <MuseumSubTitle />
            <MuseumTitle />
            <PageNumber pageNumber="3" />
        </Container>
        </>
    )
}

export default Museum
