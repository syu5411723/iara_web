import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterCentertext = styled(Link)`
    
`

const FooterCenterItem = ({text}) => {
    return (
        <>
            <FooterCentertext to="/" >{text}</FooterCentertext>
        </>
    )
}

export default FooterCenterItem
