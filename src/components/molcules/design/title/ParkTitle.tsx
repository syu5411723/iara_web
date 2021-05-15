import React from 'react'
import styled from 'styled-components'
import TitleText from '../../../atoms/design/TitleText'

const TitleWrapper = styled.div`
    font-family: lustprodidone-no1uploadedfile,serif;
    color: #000;
    display: block;
    user-select: none;
    position:absolute;
    bottom:10%;
    left:20%;
    display:flex;
`


const ParkTitle = () => {
    return (
        <>

        <TitleWrapper>
            <TitleText text="P" delay={0.14} />
            <TitleText text="A" delay={0.12} />
            <TitleText text="R" delay={0.1} />
            <TitleText text="K" delay={0.08} />
            <TitleText text="-" delay={0.06} />
            <TitleText text="I" delay={0.04} />
            <TitleText text="T" delay={0.02} />
        </TitleWrapper>
        </>
    )
}

export default ParkTitle