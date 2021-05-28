import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import DetailFooter from '../components/organisms/design/DetailFooter'
import BookDetail from '../components/organisms/mainDetail/BookDetail'
import FiltroDetail from '../components/organisms/mainDetail/FiltroDetail'
import MuseumDetail from '../components/organisms/mainDetail/MuseumDetail'
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
                        <DetailFooter nextLink="/" scrollDelay={0} />
                    </Route>
                    <Route exact path="/filtro">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay={0} />
                    </Route>
                    <Route exact path="/museum">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay={0} />
                    </Route>
                    <Route exact path="/label">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay={0} />
                    </Route>
                    <Route exact path="/park_it">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay={0} />
                    </Route>
                    <Route exact path="/expo">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay={0} />
                    </Route>
                    <Route exact path="/library">
                        <div style={{ display: "none" }} >
                            <BookDetail />
                        </div>
                        <DetailFooter nextLink="/" scrollDelay={0} />
                    </Route>
                    <Route exact path="/book_detail">
                        <BookDetail />
                        <DetailFooter nextLink="/filtro_detail" scrollDelay={500} />
                    </Route>
                    <Route exact path="/filtro_detail">
                        <FiltroDetail />
                        <DetailFooter nextLink="/museum_detail" scrollDelay={500} />
                    </Route>
                    <Route exact path="/museum_detail">
                        <MuseumDetail />
                        <DetailFooter nextLink="/label_detail" scrollDelay={400} />
                    </Route>                
                    <Route exact path="/label_detail">
                        <LabelDetail />
                        <DetailFooter nextLink="/park_it_detail" scrollDelay={400} />
                    </Route>
                    <Route exact path="/park_it_detail">
                        <ParkDetail />
                        <DetailFooter nextLink="/expo_detail" scrollDelay={400} />
                    </Route>
                    <Route exact path="/expo_detail">
                        <ExpoDetail />
                        <DetailFooter nextLink="/library_detail" scrollDelay={400} />
                    </Route>
                    <Route exact path="/library_detail">
                        <LibraryDetail />
                        <DetailFooter nextLink="/book_detail" scrollDelay={400} />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default FooterRouter
