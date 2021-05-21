import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import DerailFootrLink from '../../atoms/main/design/DerailFootrLink'
import DetailFooterContent from '../../atoms/main/design/DetailFooterContent'
import DetailFooterTitle from '../../atoms/main/design/DetailFooterTitle'

const FooterContainer = styled.div`
    background-color: #FFF2E0;
    width:100%;
    padding: 200px 0;
    margin-top:-200px;
    position:relative;
`
const FooterInner = styled.div`
    width:80%;
    max-width:1250px;
    display:flex;
    justify-content:space-between;
    margin:0 auto;

`
const ContentRight = styled.div`
    width:50%;
    height:50%;
`
const ContentLeft = styled.div`

`

const DetailFooter = () => {
    return (
        <>
            <FooterContainer>
                <FooterInner>
                    <ContentLeft>
                        <DetailFooterTitle />
                        <DetailFooterContent  text01="Behace" text02="Editorial Showcase" text03="Grid Based Editorial Design" />
                    </ContentLeft>
                    <ContentRight>
                        <DerailFootrLink />
                    </ContentRight>
                </FooterInner>
            </FooterContainer>
        </>
    )
}

export default DetailFooter
