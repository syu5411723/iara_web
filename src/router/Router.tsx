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
import BgPath from '../components/atoms/design/BgPath'
import { animate01, animate02 } from "../components/atoms/design/AnimateData"

const Router = ({ colorBool }) => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={rootPath} >
                    <Route exact path="/">
                        <Book colorBool={colorBool} />
                    </Route>
                    <Route exact path="/filtro">
                        <Filtro colorBool={colorBool} />
                    </Route>
                    <Route exact path="/museum">
                        <Museum colorBool={colorBool} />
                    </Route>
                    <Route exact path="/label">
                        <Label colorBool={colorBool} />
                    </Route>
                    <Route exact path="/park_it">
                        <Park colorBool={colorBool} />
                    </Route>
                    <Route exact path="/expo">
                        <Expo colorBool={colorBool} />
                    </Route>
                    <Route exact path="/library">
                        <Library colorBool={colorBool} />
                    </Route>
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


export const LinkRouter = ({ changeColor, }) => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <>
            <svg>
                <linearGradient id="gradient01">
                    <stop offset="0%" stop-color="rgba(251,190,104,1)" />
                    <stop offset="100%" stop-color="rgba(253,137,29,1)" />
                </linearGradient>
                <linearGradient id="gradient02">
                    <stop offset="0%" stop-color="rgba(255,252,0,1)" />
                    <stop offset="100%" stop-color="rgba(253,168,29,1)" />
                </linearGradient>
            </svg>
            <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={rootPath} >   

                                
                <Route exact path="/">
                    <BgPath changeColor={changeColor} gradient="url(#gradient01)" variants={animate01}/>
                    </Route>
                    <Route exact path="/filtro">
                    <BgPath changeColor={changeColor} gradient="url(#gradient02)" variants={animate02} />
                    </Route>
                    <Route exact path="/museum">
                        <BgPath changeColor={changeColor} gradient="url(#gradient01)" variants={animate01} />
                    </Route>
                    <Route exact path="/label">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" variants={animate01} />
                    </Route>
                    <Route exact path="/park_it">
                        <BgPath changeColor={changeColor} gradient="url(#gradient01)" variants={animate01} />
                    </Route>
                    <Route exact path="/expo">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" variants={animate01} />
                    </Route>
                    <Route exact path="/library">
                        <BgPath changeColor={changeColor} gradient="url(#gradient01)" variants={animate01} />
                    </Route>
                </Switch>
        </AnimatePresence>
        </>
    )
}

export const AnimateRouter = ({ changeColor }) => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <AnimatePresence>
            <Switch>
                <Route path="/">
                    <AnimateBg changeColor={changeColor} />
                </Route>
                <Route path="/filtro">
                    <AnimateBg changeColor={changeColor} />
                </Route>
                <Route path="/museum">
                    <AnimateBg changeColor={changeColor} />
                </Route>
                <Route path="/label">
                    <AnimateBg changeColor={changeColor} />
                </Route>
                <Route path="/park_it">
                    <AnimateBg changeColor={changeColor} />
                </Route>
                <Route path="/expo">
                    <AnimateBg changeColor={changeColor} />
                </Route>
                <Route path="/library">
                    <AnimateBg changeColor={changeColor} />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}


