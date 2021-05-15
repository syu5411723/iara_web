import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
    position:fixed;
    width: 30px;
    height: 30px;
    top:5%;
    left:3%;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.2s ease-out;
    mix-blend-mode: difference;
    z-index: 1000;
    pointer-events: none;
`

export const Sample02 = () => {
    return (
        <>
            <Circle />
        </>
    )
}
