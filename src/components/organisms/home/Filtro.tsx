import React from 'react'
import styled from 'styled-components'

import PageNumber from '../../molcules/design/PageNumber'
import FiltroSubTitle from '../../molcules/design/subtitle/FirtroSubTitle'
import FiltroTitle from '../../molcules/design/title/FiltroTitle'

const Container = styled.div`

`

const Filtro = ({colorBool}) => {
    return (
        <>
            <Container>
                <FiltroSubTitle />
                <FiltroTitle colorBool={colorBool} />
                <PageNumber pageNumber="2" />
            </Container>
        </>
    )
}

export default Filtro
