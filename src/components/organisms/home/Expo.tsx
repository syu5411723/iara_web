import React from 'react'
import styled from 'styled-components'

import PageNumber from '../../molcules/design/PageNumber'
import ExpoSubTitle from '../../molcules/design/subtitle/ExpoSubTitle'
import ExpoTitle from '../../molcules/design/title/ExpoTitel'

const Container = styled.div``

const Expo = ({colorBool}) => {
    return (
        <>
        <Container>
            <ExpoSubTitle />
            <ExpoTitle  colorBool={colorBool} />
            <PageNumber pageNumber="6" />
        </Container>
        </>
    )
}

export default Expo
