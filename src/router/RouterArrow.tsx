﻿import React from 'react'
import {  Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Arrow from '../components/molcules/design/Arrow'
import NextArrow from '../components/atoms/design/NextArrow'



const ArrowRouter = () => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={rootPath} >
                    <Route exact path="/">
                        <NextArrow/>
                    </Route>
                    <Route exact path="/filtro">
                        <NextArrow/>
                    </Route>
                    <Route exact path="/museum">
                        <NextArrow/>
                    </Route>
                    <Route exact path="/label">
                        <NextArrow/>
                    </Route>
                    <Route exact path="/park_it">
                        <NextArrow/>
                    </Route>
                    <Route exact path="/expo">
                        <NextArrow/>
                    </Route>
                    <Route exact path="/library">
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default ArrowRouter
