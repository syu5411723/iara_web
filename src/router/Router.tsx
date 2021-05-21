import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import Filtro from '../components/organisms/home/Filtro'
import Book from '../components/organisms/home/Book'
import Museum from '../components/organisms/home/Museum'
import Label from '../components/organisms/home/Label'
import Park from '../components/organisms/home/Park'
import Expo from '../components/organisms/home/Expo'
import Library from '../components/organisms/home/Library'
import BookDetail from '../components/organisms/mainDetail/BookDetail'
import FiltroDetail from '../components/organisms/mainDetail/FiltroDetail'
import LabelDetail from '../components/organisms/mainDetail/LabelDetail'
import MuseumDetail from '../components/organisms/mainDetail/MuseumDetail'
import ParkDetail from '../components/organisms/mainDetail/ParkDetail'
import ExpoDetail from '../components/organisms/mainDetail/ExpoDetail'
import LibraryDetail from '../components/organisms/mainDetail/LibraryDetail'
import AnimateBg from '../components/atoms/design/AnimateBg'
import Arrow from '../components/molcules/design/Arrow'

const Router = () => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} >
                <Switch location={location} key={rootPath} >
                    <Route exact path="/" component={Book}></Route>
                    <Route exact path="/filtro" component={Filtro} />
                    <Route exact path="/museum" component={Museum} />
                    <Route exact path="/label" component={Label} />
                    <Route exact path="/park_it" component={Park} />
                    <Route exact path="/expo" component={Expo} />
                    <Route exact path="/library" component={Library} />
                    <Route exact path="/book/detail" component={BookDetail} />
                    <Route exact path="/filtro/detail" component={FiltroDetail} />
                    <Route exact path="/museum/detail" component={MuseumDetail} />
                    <Route exact path="/label/detail" component={LabelDetail} />
                    <Route exact path="/park_it/detail" component={ParkDetail} />
                    <Route exact path="/expo/detail" component={ExpoDetail} />
                    <Route exact path="/library/detail" component={LibraryDetail} />
                </Switch>
            </AnimatePresence>
        </>
    )
}


export default Router


export const LinkRouter = () => {
    return (
        <>
            <AnimatePresence>
                <Switch>
                    <Route exact path="/" component={AnimateBg} />
                    <Route exact path="/filtro" component={AnimateBg} />
                    <Route exact path="/museum" component={AnimateBg} />
                    <Route exact path="/label" component={AnimateBg} />
                    <Route exact path="/park_it" component={AnimateBg} />
                    <Route exact path="/expo" component={AnimateBg} />
                    <Route exact path="/library" component={AnimateBg} />
                </Switch>
            </AnimatePresence>
        </>
    )
}


