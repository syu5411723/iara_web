import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import HamburgerBg from '../../atoms/header/HamburgerBg';
import HamburgerLIne from '../../atoms/header/HamburgerLIne'
import HamburgerText from '../../atoms/header/HamburgerText'

const BackgroundHandleCnage = styled(motion.div)`
    position:fixed;
    top:0;
    right:0;
    background-color:rgba(1,1,1,0.4);
    width:100vw;
    height:100vh;
    z-index:2;
`
const bgV = {
    closed: {display: "none"},
    open: {display: "block", transition:{duration:0}} 
}

const Hamburger = () => {
    const [isOpen, setOpen] = React.useState(false);
    const handleChange = () => setOpen(!isOpen);
    return (
        <>
            <BackgroundHandleCnage  onClick={handleChange} 
                variants={bgV}
                animate={isOpen ? "open" : "closed"}
            />
            <HamburgerText  />
            <HamburgerLIne isOpen={isOpen} handleChange={handleChange} />
            <HamburgerBg  isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}

export default Hamburger
