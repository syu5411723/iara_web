import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FooterLeft from '../atoms/footer/FooterLeft'
import FooterRight from '../atoms/footer/FooterRight'
import FooterCenter from '../molcules/Footer/FooterCenter'


const FooterContainer = styled.footer`
`
const FooterInner = styled.div`
    width:90%;
    height:50px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    font-size: 14px;
    font-weight:800;
    letter-spacing:0.1em;
`
const Dammy = styled(Link)`
    font-size: 50px;
`

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterInner>
                    <FooterLeft />
                    <FooterCenter />
                    <FooterRight />
                </FooterInner>
            </FooterContainer>
        </>
    )
}

export default Footer
