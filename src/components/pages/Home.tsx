import React from 'react'
import styled from 'styled-components'
import Footer from '../templates/Footer'
import Header from '../templates/Header'
import Main from '../templates/Main'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height: 70vh;

`

const Home = () => {
    return (
        <>
            <Container>
                
                <Main />
            </Container>
        </>
    )
}

export default Home
