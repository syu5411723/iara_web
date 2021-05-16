import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Arrow from '../components/molcules/design/Arrow'
import styled from 'styled-components'

const LinkWrapper = styled.div`
    display:flex;
    width: 200px;
    height:50px;
    margin:0 auto;
    justify-content:space-between;
    align-items:center;
`
const LinkWrapper01 = styled.div`

`
const LinkWrapper02 = styled.div`

`

const SampleLink = styled(Link)`
    font-size: 30px;
`

const ArrowRouter = () => {
    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} >
                <Switch>
                    <Route exact path="/">
                        {/* <Arrow  prevLink="library" nextLink="filtro" /> */}
                        <Arrow prevLink="library" nextLink="filtro" />

                    </Route>
                    <Route exact path="/filtro">
                        <Arrow prevLink="/" nextLink="museum" />
                    </Route>
                    <Route exact path="/museum">
                        <Arrow prevLink="filtro" nextLink="label" />
                    </Route>
                    <Route exact path="/label">
                        <Arrow prevLink="museum" nextLink="park_it" />
                    </Route>
                    <Route exact path="/park_it">
                        <Arrow prevLink="label" nextLink="expo" />
                    </Route>
                    <Route exact path="/expo">
                        <Arrow prevLink="park_it" nextLink="library" />
                    </Route>
                    <Route exact path="/library">
                        <Arrow prevLink="expo" nextLink="/" />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default ArrowRouter

// import React from 'react'
// import { Route, Switch, useLocation } from 'react-router-dom'
// import { AnimatePresence } from "framer-motion"
// import Sample from '../Sample';


// const ArrowRouter = () => {
//     const location = useLocation();
//     const [_, rootPath] = location.pathname.split("/");
//     return (
//         <>
//                 <Switch>
//                     <Route exact path="/">
//                         <Sample link="/library" />
//                         <h1>Home</h1>
//                     </Route>
//                     <Route exact path="/library">
//                         <Sample link="/" />
//                         <h1>Sample</h1>
//                     </Route>
//                 </Switch>

//         </>
//     )
// }

// export default ArrowRouter
