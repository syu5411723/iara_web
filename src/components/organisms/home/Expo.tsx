import React from 'react'
import styled from 'styled-components'
import ChangeLink from '../../atoms/design/ChangeLink'

import PageNumber from '../../molcules/design/PageNumber'
import ExpoSubTitle from '../../molcules/design/subtitle/ExpoSubTitle'
import ExpoTitle from '../../molcules/design/title/ExpoTitel'

const Container = styled.div`
    width:100vw;
    height:100vh;
    position: relative;
`

const Expo = ({colorBool}) => {
    return (
        <>
        <Container>
            <ChangeLink />
            <ExpoSubTitle />
            <ExpoTitle  colorBool={colorBool} />
            <PageNumber pageNumber="6" />
        </Container>
        </>
    )
}

export default Expo
