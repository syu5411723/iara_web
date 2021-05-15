import React from 'react'
import styled from 'styled-components'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import ExpoSubTitle from '../../molcules/design/subtitle/ExpoSubTitle'
import ExpoTitle from '../../molcules/design/title/ExpoTitel'

const Container = styled.div`

`


const Expo = () => {
    return (
        <>
        <Container>
            <ExpoSubTitle />
            <ExpoTitle />
            <PageNumber pageNumber="6" />
            <Arrow  prevLink="/park_it" nextLink="/library" />
        </Container>
        </>
    )
}

export default Expo
