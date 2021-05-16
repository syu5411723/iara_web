import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterLeftText = styled(Link)`
`

const FooterLeft = () => {
    return (
        <>
            <FooterLeftText to="/" >about & contact</FooterLeftText>
        </>
    )
}

export default FooterLeft
