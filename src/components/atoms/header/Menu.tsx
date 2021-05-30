import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { data } from "./MenuData"

const Container = styled.div``
const MenuInner = styled.div`
    margin-left: 40px;
    margin-top: 90px;
`
const MenuList = styled(motion.ul)`
    display:flex;
    flex-direction:column;
    
`
const MenuItem = styled(motion.li)`
    color: #292929; 
    text-decoration:none;
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 40px;
    font-family: 'Lora', serif;
    list-style:none;
`
const Links = styled(Link)``

const listV = {
    closed: {},
    open: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
    hover: {},
}
const itemV = {
    closed: { x: "50px", opacity: 0 },
    open: { x: "0px", opacity: 1 },
    hover: { scale: 1.2, originX: 0 }
}



const Menu = ({ isOpen, setOpen }) => {
    const chngeLink = () => {
        setOpen(!isOpen);
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <>
            <Container>
                <MenuInner>
                    <MenuList
                        variants={listV}
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >
                        {data.map((item) => (
                            <motion.div
                                whileHover={{scale: 1.2, originX: 0}}
                            >
                                <MenuItem
                                    variants={itemV}
                                    onClick={chngeLink}
                                >
                                    <Links to={item.link}>
                                        {item.text}
                                    </Links>
                                </MenuItem>
                            </motion.div>
                        ))}
                    </MenuList>
                </MenuInner>
            </Container>
        </>
    )
}

export default Menu
