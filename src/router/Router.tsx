import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Filtro from '../components/organisms/main/Filtro'
import Book from '../components/organisms/main/Book'
import Museum from '../components/organisms/main/Museum'
import Label from '../components/organisms/main/Label'
import Park from '../components/organisms/main/Park'
import Expo from '../components/organisms/main/Expo'
import Library from '../components/organisms/main/Library'

const Router = () => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} >
                <Switch location={location} key={rootPath} >
                    <Route exact path="/" component={Book} />
                    <Route exact path="/filtro" component={Filtro} />
                    <Route exact path="/museum" component={Museum} />
                    <Route exact path="/label" component={Label} />
                    <Route exact path="/park_it" component={Park} />
                    <Route exact path="/expo" component={Expo} />
                    <Route exact path="/library" component={Library} />
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default Router
