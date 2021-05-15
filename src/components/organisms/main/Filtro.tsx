import React from 'react'
import styled from 'styled-components'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import FiltroSubTitle from '../../molcules/design/subtitle/FirtroSubTitle'
import FiltroTitle from '../../molcules/design/title/FiltroTitle'

const Container = styled.div`

`

const Filtro = () => {
    return (
        <>
            <Container>
                <FiltroSubTitle />
                <FiltroTitle />
                <PageNumber pageNumber="2" />
            <Arrow  prevLink="/" nextLink="/museum" />
            </Container>
        </>
    )
}

export default Filtro
