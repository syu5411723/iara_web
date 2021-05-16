import React from 'react'
import styled from 'styled-components'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import LabelSubTitle from '../../molcules/design/subtitle/LabelSubTitle'
import MuseumSubTitle from '../../molcules/design/subtitle/MuseumSubTitle'
import LabelTitle from '../../molcules/design/title/LabelTitle'
import MuseumTitle from '../../molcules/design/title/MuseumTitle'

const Container = styled.div`

`


const Label = () => {
    return (
        <>
        <Container>
            <LabelSubTitle />
            <LabelTitle />
            <PageNumber pageNumber="4" /> 
        </Container>
        </>
    )
}

export default Label
