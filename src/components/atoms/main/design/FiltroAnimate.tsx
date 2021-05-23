import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BgPath from '../../design/BgPath'

const Links = styled(Link)`

`

const FiltroAnimate = ({ changeColor }) => {
    return (
        <>
            <Link to="/filtro/detail">
                <svg>
                    <linearGradient id="gradient">
                        <stop offset="0%" stop-color="rgba(255,252,0,1)" />
                        <stop offset="100%" stop-color="rgba(253,168,29,1)" />
                    </linearGradient>
                </svg>
                <BgPath changeColor={changeColor} gradient="url(#gradient)" />
            </Link>
        </>
    )
}

export default FiltroAnimate
