import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

import DetailImg from '../../atoms/main/book/DetailImg'


const ImgWrapper = styled(motion.div)`

`
const imgV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } }
}


const DetailImgWrapper = ({img, height, maxHeight}) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce:true,
    })
    return (
        <>
            <ImgWrapper
                ref={ref} inView01={inView}
                variants={imgV}
                animate={inView ? "visible" : "hidden"}
            >
                <DetailImg img={img} height={height} maxHight={maxHeight} />
            </ImgWrapper>
        </>
    )
}

export default DetailImgWrapper
