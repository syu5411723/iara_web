import React from 'react'
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
`


const MuseumTitle = () => {
    return (
        <>

        <TitleWrapper>
            <TitleText text="M" delay={0.12} />
            <TitleText text="U" delay={0.1} />
            <TitleText text="S" delay={0.08} />
            <TitleText text="E" delay={0.06} />
            <TitleText text="U" delay={0.04} />
            <TitleText text="M" delay={0.02} />
        </TitleWrapper>
        </>
    )
}

export default MuseumTitle