import React from 'react'
import styled from 'styled-components'
import FooterCenterItem from '../../atoms/footer/FooterCenterItem'

const FooterCenterList = styled.div`
    display:flex;
    justify-content:space-between;
    width:30vw;
`

const FooterCenter = () => {
    return (
        <>
            <FooterCenterList>
                <FooterCenterItem text="behance"/>
                <FooterCenterItem text="dribble"/>
                <FooterCenterItem text="linkedin"/>
            </FooterCenterList>
        </>
    )
}

export default FooterCenter
