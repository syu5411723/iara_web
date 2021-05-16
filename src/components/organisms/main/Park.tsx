import { PanSession } from 'framer-motion/types/gestures/PanSession'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import ParkSubTitle from '../../molcules/design/subtitle/ParkSubTitle'
import ParkTitle from '../../molcules/design/title/ParkTitle'

const Container = styled.div`

`

const Park = () => {
    return (
        <>
        <Container>
            <ParkSubTitle />
            <ParkTitle />
            <PageNumber pageNumber="5" />
        </Container>
        </>
    )
}

export default Park
