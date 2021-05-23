import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BgPath from '../../design/BgPath'

const Links = styled(Link)`

`

const BookAnimate = ({ changeColor }) => {
    return (
        <>
                <svg>
                    <linearGradient id="gradient">
                        <stop offset="0%" stop-color="rgba(251,190,104,1)" />
                        <stop offset="100%" stop-color="rgba(253,137,29,1)" />
                    </linearGradient>
                </svg>
                <BgPath changeColor={changeColor} gradient="url(#gradient)" />

        </>
    )
}

export default BookAnimate
