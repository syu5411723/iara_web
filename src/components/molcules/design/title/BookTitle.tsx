﻿import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TitleText from '../../../atoms/design/TitleText'

const TitleWrapper = styled.div`
    font-family: lustprodidone-no1uploadedfile,serif;
    color: #000;
    display: block;
    user-select: none;
    position:absolute;
    bottom:0%;
    left:20%;
    display:flex;
    z-index:10;
`


const BookTitle = () => {
    return (
        <>

        <TitleWrapper >
            <TitleText text="B" delay={0.08} />
            <TitleText text="O" delay={0.06} />
            <TitleText text="O" delay={0.04} />
            <TitleText text="K" delay={0.02} />
        </TitleWrapper>
        </>
    )
}

export default BookTitle
