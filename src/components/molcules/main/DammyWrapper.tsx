import React from 'react'
import styled from 'styled-components'

const DammyWrapper = ({bgc}) => {
    const DammyContainer = styled.div`
    width:100vw;
    height:40vw;
    background-color: ${bgc};
`

    return (
        <>
            <DammyContainer />
        </>
    )
}

export default DammyWrapper
