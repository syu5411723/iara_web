import React from 'react'
import styled from 'styled-components'
import NextArrow from '../../atoms/design/NextArrow'
import PrevArrow from '../../atoms/design/PrevArrow'

const ArrowWrapper = styled.div`
    width: 60vw;
    display:flex;
    justify-content:space-between;
`

const Sample01 = () => {
    return (
        <>
            <ArrowWrapper>
                <PrevArrow prevLink="" />
                <NextArrow nextLink="/"/>
            </ArrowWrapper>
        </>
    )
}

export default Sample01
