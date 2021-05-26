import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import DetailFooter from '../components/organisms/design/DetailFooter'
import BookDetail from '../components/organisms/mainDetail/BookDetail'
import DerailFootrLink from '../components/atoms/main/design/DerailFootrLink'


const FooterRouter = () => {
    return (
        <>
            <AnimatePresence >
                <Switch>
                    <Route exact path="/book/detail">
                        {/* <BookDetail /> */}
                        <DetailFooter nextLink="/filtro/detail" view={true} />
                    </Route>
                        <Route exact path="/">
                        {/* <BookDetail /> */}
                            <DetailFooter nextLink="/filtro/detail" view={true} />
                        </Route>
                    <Route exact path="/filtro">
                        <DetailFooter nextLink="/filtro/detail" view={false} />
                    </Route>
                    <Route exact path="/filtro/detail">
                        <DetailFooter nextLink="/filtro" view={true} />
                    </Route>
                    <Route exact path="/museum/detail">
                        <DetailFooter nextLink="/label/detail" view={true} />
                    </Route>
                    <Route exact path="/label/detail">
                        <DetailFooter nextLink="/park_it/detail" view={true} />
                    </Route>
                    <Route exact path="/park_it/detail">
                        <DetailFooter nextLink="/expo/detail" view={true} />
                    </Route>
                    <Route exact path="/expo/detail">
                        <DetailFooter nextLink="/library/detail" view={true} />
                    </Route>
                    <Route exact path="/library/detail">
                        <DetailFooter nextLink="/book/detail" view={true} />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default FooterRouter
