import React from 'react'
import {  Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Arrow from '../components/molcules/design/Arrow'
import AnimateBg from '../components/atoms/design/AnimateBg'



const ArrowRouter = () => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} >
                <Switch>
                    <Route exact path="/">
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
