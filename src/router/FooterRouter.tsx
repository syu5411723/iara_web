import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import DetailFooter from '../components/organisms/design/DetailFooter'
import BookDetail from '../components/organisms/mainDetail/BookDetail'
import DerailFootrLink from '../components/atoms/main/design/DerailFootrLink'
import FiltroDetail from '../components/organisms/mainDetail/FiltroDetail'
import MuseumDetail from '../components/organisms/mainDetail/MuseumDetail'
import Label from '../components/organisms/home/Label'
import LabelDetail from '../components/organisms/mainDetail/LabelDetail'
import ParkDetail from '../components/organisms/mainDetail/ParkDetail'
import ExpoDetail from '../components/organisms/mainDetail/ExpoDetail'
import LibraryDetail from '../components/organisms/mainDetail/LibraryDetail'


const FooterRouter = () => {
    return (
        <>
            <AnimatePresence >
                <Switch>
                    <Route exact path="/">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/filtro/detail" />
                    </Route>
                    <Route exact path="/filtro">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/museum">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/label">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/park_it">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/expo">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/library">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/book/detail">
                        <BookDetail />
                        <DetailFooter nextLink="/filtro/detail" />
                    </Route>
                    <Route exact path="/filtro/detail">
                        <FiltroDetail />
                        <DetailFooter nextLink="/museum/detail" />
                    </Route>
                    <Route exact path="/museum/detail">
                        <MuseumDetail />
                        <DetailFooter nextLink="/label/detail" />
                    </Route>
                    <Route exact path="/label/detail">
                        <LabelDetail />
                        <DetailFooter nextLink="/park_it/detail" />
                    </Route>
                    <Route exact path="/park_it/detail">
                        <ParkDetail />
                        <DetailFooter nextLink="/expo/detail" />
                    </Route>
                    <Route exact path="/expo/detail">
                        <ExpoDetail />
                        <DetailFooter nextLink="/library/detail" />
                    </Route>
                    <Route exact path="/library/detail">
                        <LibraryDetail />
                        <DetailFooter nextLink="/book/detail" />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default FooterRouter
