import React from 'react'
import styled from 'styled-components'

import PageNumber from '../../molcules/design/PageNumber'
import LabelSubTitle from '../../molcules/design/subtitle/LabelSubTitle'
import LabelTitle from '../../molcules/design/title/LabelTitle'

const Container = styled.div`

`


const Label = ({colorBool}) => {
    return (
        <>
        <Container>
            <LabelSubTitle />
            <LabelTitle colorBool={colorBool} />
            <PageNumber pageNumber="4" /> 
        </Container>
        </>
    )
}

export default Label
