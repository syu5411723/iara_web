import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import img from "../../../images/2.jpg"

const BgPaths = styled(motion.path)``
const G = styled(motion.g)``

const animateV = {
    start: {
        d: [
            "M390.5,300.5Q388,351,354,408.5Q320,466,247,474.5Q174,483,112,439Q50,395,47.5,322.5Q45,250,74,196.5Q103,143,153,124Q203,105,261.5,69.5Q320,34,342,100.5Q364,167,378.5,208.5Q393,250,390.5,300.5Z",
        ],
    },
    end: {
        d: [
            "M390.5,300.5Q388,351,354,408.5Q320,466,247,474.5Q174,483,112,439Q50,395,47.5,322.5Q45,250,74,196.5Q103,143,153,124Q203,105,261.5,69.5Q320,34,342,100.5Q364,167,378.5,208.5Q393,250,390.5,300.5Z",
            "M411.5,321.5Q446,393,378,413.5Q310,434,247.5,441.5Q185,449,126,416Q67,383,89.5,316.5Q112,250,103.5,194Q95,138,142.5,101.5Q190,65,253,55.5Q316,46,361.5,91Q407,136,392,193Q377,250,411.5,321.5Z",
            "M396.5,294Q371,338,345.5,402Q320,466,251.5,461Q183,456,165.5,390Q148,324,101,287Q54,250,65.5,187.5Q77,125,136.5,104Q196,83,258,59.5Q320,36,381,73Q442,110,432,180Q422,250,396.5,294Z",
            "M467,321.5Q447,393,373,397.5Q299,402,245,417Q191,432,163,383Q135,334,81,292Q27,250,57.5,191.5Q88,133,148.5,128Q209,123,263,82.5Q317,42,384.5,73Q452,104,469.5,177Q487,250,467,321.5Z",
            "M428.5,290.5Q362,331,338,389.5Q314,448,256,429Q198,410,123.5,403Q49,396,33,323Q17,250,76.5,209Q136,168,161,110Q186,52,243.5,73Q301,94,346,121Q391,148,443,199Q495,250,428.5,290.5Z",
            "M390.5,300.5Q388,351,354,408.5Q320,466,247,474.5Q174,483,112,439Q50,395,47.5,322.5Q45,250,74,196.5Q103,143,153,124Q203,105,261.5,69.5Q320,34,342,100.5Q364,167,378.5,208.5Q393,250,390.5,300.5Z"
        ],
        transition: { duration: 15, ease: "linear", repeat: Infinity, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    },
}

const svgV = {
    hidden: { opacity: 0 , scale:0.2},
    visible: { opacity: 1,scale:1, transition: { type: "spring",stiffness: 100, delay: 2.3 } },
    exit: { opacity: 0, transition: {duration:0, delay:1.4 } }
}

const BgPath = ({ hoverBg, changeColor, gradient }) => {
    return (
        <>
            <defs>
                <pattern id="img1" patternUnits="userSpaceOnUse" width="900" height="600">
                    <image href={hoverBg} x="-150" y="50" width="900" height="500" />
                </pattern>
            </defs>
            <G
                variants={svgV}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <BgPaths
                    variants={animateV}
                    initial="start"
                    animate="end"
                    whileHover={{ fill: "url(#img1)", transition: { duration: 0.9 } }}
                    onMouseEnter={changeColor}
                    onMouseLeave={changeColor}
                    fill={gradient}
                />
            </G>
        </>
    )
}

export default BgPath
