import React from 'react'
import styled from 'styled-components'
import AnimateBg from '../../atoms/design/AnimateBg'
import NextArrow from '../../atoms/design/NextArrow'
import PrevArrow from '../../atoms/design/PrevArrow'

const ArrowWrapper = styled.div`
    width: 60vw;
    height: 15vh;
    display:flex;
    justify-content:space-between;
    margin:0 auto;
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
