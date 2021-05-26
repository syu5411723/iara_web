import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DerailFootrLink from '../../atoms/main/design/DerailFootrLink'
import DetailFooterContent from '../../atoms/main/design/DetailFooterContent'
import DetailFooterTitle from '../../atoms/main/design/DetailFooterTitle'

const FooterContainer = styled.div`
    background-color: #FBE7E7;
    width:100%;
    margin-top:-100vh;
    height:100%;
`
const FooterInner = styled.div`
    width:100%;
    height:100%;
    max-width:1250px;
    background-color: #FFF2E0;
    position:relative;
    margin:0 auto;
    padding: 200px 0;
    z-index:0;

`
const ContentWrappr = styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    margin:0 auto;
`
const ContentRight = styled.div`
    width:50%;
    height:50%;
    display:flex;
    justify-content:center;
`

const ContentLeft = styled.div`
    width:50%;
    height:50%;
`

const DetailFooter = ({ nextLink,}) => {
    return (
        <>
                <FooterContainer>
                    <FooterInner>
                        <ContentWrappr>
                            <ContentLeft>
                                <DetailFooterTitle />
                                <DetailFooterContent text01="Behace" text02="Editorial Showcase" text03="Grid Based Editorial Design" />
                            </ContentLeft>
                            <ContentRight>
                                <DerailFootrLink nextLink={nextLink} />
                            </ContentRight>
                        </ContentWrappr>
                    </FooterInner>
                </FooterContainer>

        </>
    )
}

export default DetailFooter
