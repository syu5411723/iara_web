import React from 'react'
import styled from 'styled-components'
import ChangeLink from '../../atoms/design/ChangeLink'

import PageNumber from '../../molcules/design/PageNumber'
import FiltroSubTitle from '../../molcules/design/subtitle/FirtroSubTitle'
import FiltroTitle from '../../molcules/design/title/FiltroTitle'

const Container = styled.div`
    width:100vw;
    height:100vh;
`

const Filtro = ({colorBool}) => {
    return (
        <>
            <Container>
                <ChangeLink />
                <FiltroSubTitle />
                <FiltroTitle colorBool={colorBool} />
                <PageNumber pageNumber="2" />
            </Container>
        </>
    )
}

export default Filtro
