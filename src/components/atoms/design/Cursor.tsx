import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from "framer-motion"
import classNames from "classnames";


// const CursorWrapper  = styled(motion.div)`
// position: fixed;
// width: 30px;
// height: 30px;
// top: -50%;
// left: -50%;
// border-radius: 50%;
// background-color: #fff;
// transition: transform 0.2s ease-out;
// mix-blend-mode: difference;
// z-index: 1000;
// pointer-events: none;
// `

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener('mousemove', onMouseEnter)
        document.addEventListener('mouseleave', onMouseLeave)
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener('mousemove', onMouseEnter)
        document.removeEventListener('mouseleave', onMouseLeave)
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp)
    };
    const handleLinkHoverEvents = () =>{
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener('mouseover', () => setLinkHovered(true));
            el.addEventListener('mouseout', () => setLinkHovered(false))
        })
    }

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseLeave = () => {
        setHidden(true);
    }
    const onMouseEnter = () => {
        setHidden(false);
    }
    const onMouseUp = () => {
        setClicked(false);
    }
    const onMouseDown = () => {
        setClicked(true);
    };
    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered
        }
    );

    return (
        <>
            <div
                className={cursorClasses}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }} />
        </>
    )
}

export default Cursor
