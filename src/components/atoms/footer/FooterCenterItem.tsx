import React from 'react'
import styled from 'styled-components'

const FooterCentertext = styled.p`
`

const FooterCenterItem = ({text}) => {
    return (
        <>
            <FooterCentertext>{text}</FooterCentertext>
        </>
    )
}

export default FooterCenterItem
