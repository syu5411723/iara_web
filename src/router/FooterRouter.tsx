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


const FooterRouter = () => {
    return (
        <>
            <AnimatePresence>
                <Switch>
                    <Route exact path="/">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/filtro">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/museum">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/label">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/park_it">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/expo">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/library">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/" />
                    </Route>
                    <Route exact path="/book_detail">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/filtro_detail" />
                    </Route>
                    <Route exact path="/filtro_detail">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/museum_detail" />
                    </Route>
                    <Route exact path="/museum_detail">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/label_detail" />
                    </Route>
                    <Route exact path="/label_detail">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/park_it_detail" />
                    </Route>
                    <Route exact path="/park_it_detail">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/expo_detail" />
                    </Route>
                    <Route exact path="/expo_detail">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/library_detail" />
                    </Route>
                    <Route exact path="/library_detail">
                        <FooterLinkRouter />
                        <DetailFooter nextLink="/book_detail" />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default FooterRouter

export const FooterLinkRouter = () => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={rootPath} >
            <Route exact path="/book">
                    <BookDetail />
                </Route>
                <Route exact path="/filtro">
                    <FiltroDetail />
                </Route>
                <Route exact path="/museum">
                    <MuseumDetail />
                </Route>
                <Route exact path="/label">
                    <LabelDetail />
                </Route>
                <Route exact path="/park_it">
                    <ParkDetail />
                </Route>
                <Route exact path="/expo">
                    <ExpoDetail />
                </Route>
                <Route exact path="/library">
                    <LibraryDetail />
                </Route>
                <Route exact path="/book_detail">
                    <BookDetail />
                </Route>
                <Route exact path="/filtro_detail">
                    <FiltroDetail />
                </Route>
                <Route exact path="/museum_detail">
                    <MuseumDetail />
                </Route>
                <Route exact path="/label_detail">
                    <LabelDetail />
                </Route>
                <Route exact path="/park_it_detail">
                    <ParkDetail />
                </Route>
                <Route exact path="/expo_detail">
                    <ExpoDetail />
                </Route>
                <Route exact path="/library_detail">
                    <LibraryDetail />
                </Route>
            </Switch>
        </AnimatePresence>
    )

}
