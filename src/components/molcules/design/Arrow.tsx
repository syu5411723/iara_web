import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowRouter from '../../../router/RouterArrow'
import NextArrow from '../../atoms/design/NextArrow'
import PrevArrow from '../../atoms/design/PrevArrow'

const ArrowWrapper = styled.div`
    width: 60vw;
    height: 15vh;
    display:flex;
    justify-content:flex-end;
    margin:0 auto;
`
const ArrowInner = styled(Link)`
    
`
const arrowV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0, delay: 1.8 } }
}


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
