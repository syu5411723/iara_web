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
    z-index:10;
`


const LibraryTitle = () => {
    return (
        <>

        <TitleWrapper>
            <TitleText text="R" delay={0.14} />
            <TitleText text="I" delay={0.12} />
            <TitleText text="B" delay={0.1} />
            <TitleText text="R" delay={0.08} />
            <TitleText text="A" delay={0.06} />
            <TitleText text="R" delay={0.04} />
            <TitleText text="Y" delay={0.02} />
        </TitleWrapper>
        </>
    )
}

export default LibraryTitle