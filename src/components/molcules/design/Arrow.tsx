import React from 'react'
import styled from 'styled-components'
import NextArrow from '../../atoms/design/NextArrow'
import PrevArrow from '../../atoms/design/PrevArrow'

const ArrowWrapper = styled.div`
    width: 60vw;
    display:flex;
    justify-content:space-between;
    position:absolute;
    bottom:5%;
    left:20%;
`

const Arrow = ({prevLink, nextLink}) => {
    return (
        <>
            <ArrowWrapper>
                <PrevArrow prevLink={prevLink} />
                <NextArrow nextLink={nextLink}/>
            </ArrowWrapper>
        </>
    )
}

export default Arrow
