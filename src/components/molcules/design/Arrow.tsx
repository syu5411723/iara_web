import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowRouter from '../../../router/RouterArrow'

const ArrowWrapper = styled.div`
    position: absolute;
    bottom:14%;
    right:20%;

`
const ArrowInner = styled(Link)`
    
`

const Arrow = ({ nextLink }) => {
    return (
        <>
            <ArrowWrapper>
                <ArrowInner to={nextLink} >
                    <ArrowRouter />
                </ArrowInner>
            </ArrowWrapper>
        </>
    )
}

export default Arrow
