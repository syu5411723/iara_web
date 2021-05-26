import React from 'react'
import styled from 'styled-components'
import ChangeLink from '../../atoms/design/ChangeLink'

import PageNumber from '../../molcules/design/PageNumber'
import LabelSubTitle from '../../molcules/design/subtitle/LabelSubTitle'
import LabelTitle from '../../molcules/design/title/LabelTitle'

const Container = styled.div`
    width:100vw;
    height:100vh;
    position: relative;
`


const Label = ({colorBool}) => {
    return (
        <>
        <Container>
            <ChangeLink />
            <LabelSubTitle />
            <LabelTitle colorBool={colorBool} />
            <PageNumber pageNumber="4" /> 
        </Container>
        </>
    )
}

export default Label
