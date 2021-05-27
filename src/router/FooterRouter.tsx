import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import DetailFooter from '../components/organisms/design/DetailFooter'
import BookDetail from '../components/organisms/mainDetail/BookDetail'
import FiltroDetail from '../components/organisms/mainDetail/FiltroDetail'
import MuseumDetail from '../components/organisms/mainDetail/MuseumDetail'
import LabelDetail from '../components/organisms/mainDetail/LabelDetail'
import ParkDetail from '../components/organisms/mainDetail/ParkDetail'
import ExpoDetail from '../components/organisms/mainDetail/ExpoDetail'
import LibraryDetail from '../components/organisms/mainDetail/LibraryDetail'

export const DetailRouter = () => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return(
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={rootPath}>
                <Route path="/book/detail">
                    <BookDetail />
                </Route>
                <Route path="/filtro/detail">
                    <FiltroDetail />
                </Route>
                <Route path="/museum/detail">
                    <MuseumDetail />
                </Route>
                <Route path="/label/detail">
                    <LabelDetail />
                </Route>
                <Route path="/park_it/detail">
                    <ParkDetail />
                </Route>
                <Route path="/expo/detail">
                    <ExpoDetail />
                </Route>
                <Route path="/library/detail">
                    <LibraryDetail />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}


const FooterRouter = () => {
    return (
        <>
            <AnimatePresence >
                <Switch>
                    <Route exact path="/">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/filtro/detail" scrollDelay="" />
                    </Route>
                    <Route exact path="/filtro">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay="" />
                    </Route>
                    <Route exact path="/museum">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay="" />
                    </Route>
                    <Route exact path="/label">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay="" />
                    </Route>
                    <Route exact path="/park_it">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay="" />
                    </Route>
                    <Route exact path="/expo">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay="" />
                    </Route>
                    <Route exact path="/library">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay="" />
                    </Route>
                    <Route exact path="/book/detail">
                        <DetailRouter />
                        <DetailFooter nextLink="/filtro/detail" scrollDelay={500} />
                    </Route>
                    <Route exact path="/filtro/detail">
                        <DetailRouter />
                        <DetailFooter nextLink="/museum/detail" scrollDelay={500} />
                    </Route>
                    <Route exact path="/museum/detail">
                        <DetailRouter />
                        <DetailFooter nextLink="/label/detail" scrollDelay={400} />
                    </Route>
                    <Route exact path="/label/detail">
                        <LabelDetail />
                        <DetailFooter nextLink="/park_it/detail" scrollDelay={400} />
                    </Route>
                    <Route exact path="/park_it/detail">
                        <ParkDetail />
                        <DetailFooter nextLink="/expo/detail" scrollDelay={400} />
                    </Route>
                    <Route exact path="/expo/detail">
                        <ExpoDetail />
                        <DetailFooter nextLink="/library/detail" scrollDelay={400} />
                    </Route>
                    <Route exact path="/library/detail">
                        <LibraryDetail />
                        <DetailFooter nextLink="/book/detail" scrollDelay={400} />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default FooterRouter
