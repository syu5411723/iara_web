import { m, motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const TitleWrapper = styled(motion.div)`
    margin-bottom: 30px;
`
const Text = styled.div`
    font-size:28px;
    font-weight: bold;
`

const wrapperV = {
    hidden:{opacity:0, x : "-100px"},
    visible:{opacity:1, x: "0px", transition:{duration:0.7}}
}

const DetailFooterTitle = () => {
    const [ref, inView] = useInView({
        rootMargin:"-100px 0px",
        triggerOnce:true,
    });
    return (
        <>
            <TitleWrapper
                ref={ref} inView={inView}
                variants={wrapperV}
                animate={inView ? "visible" : "hidden"}
            >
                <Text>Project Online</Text>
                <Text>Publications</Text>
            </TitleWrapper>
        </>
    )
}

export default DetailFooterTitle
