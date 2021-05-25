import { PanSession } from 'framer-motion/types/gestures/PanSession'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ChangeLink from '../../atoms/design/ChangeLink'

import Arrow from '../../molcules/design/Arrow'
import PageNumber from '../../molcules/design/PageNumber'
import ParkSubTitle from '../../molcules/design/subtitle/ParkSubTitle'
import ParkTitle from '../../molcules/design/title/ParkTitle'

const Container = styled.div`

`

const Park = ({colorBool}) => {
    return (
        <>
        <Container>
            <ChangeLink />
            <ParkSubTitle />
            <ParkTitle colorBool={colorBool} />
            <PageNumber pageNumber="5" />
        </Container>
        </>
    )
}

export default Park
