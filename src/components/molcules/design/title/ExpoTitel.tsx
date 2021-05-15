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

`


const ExpoTitle = () => {
    return (
        <>
        <TitleWrapper>
            <TitleText text="E" delay={0.08} />
            <TitleText text="X" delay={0.06} />
            <TitleText text="P" delay={0.04} />
            <TitleText text="O" delay={0.02} />
        </TitleWrapper>
        </>
    )
}

export default ExpoTitle