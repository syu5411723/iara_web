import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SampleLink = styled(Link)`
    display:flex;
    margin:0 auto;
    justify-content:space-between;
    align-items:center;
    position:absolute;

`

const Sample = ({link}) => {
    return (
        <>
            <SampleLink to={link} >Change Link</SampleLink>
        </>
    )
}

export default Sample
