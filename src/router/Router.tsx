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
import AnimateBg from '../components/atoms/design/AnimateBg'
import BgPath from '../components/atoms/design/BgPath'
import AnimateData from '../components/atoms/design/AnimateData'
import Arrow from '../components/molcules/design/Arrow'
import DetailHead from '../components/molcules/main/DetailHead'

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
                    <Route exact path="/book/detail">
                        <DetailHead number="01" title="Book" content="Fashion Portfolio for Melanie Tarica" leftText01="Branding" leftText02="Art Direction" leftText03="Editiorial Design" rightText="2021" />
                    </Route>
                    <Route exact path="/filtro/detail">
                        <DetailHead number="02" title="Filtro" content="Water Arts Festival" leftText01="Branding" leftText02="Art Direction" leftText03="Illustration" rightText="2021" />
                    </Route>
                    <Route exact path="/museum/detail">
                        <DetailHead number="03" title="Museum" content="The Design Museum" leftText01="UX/UI" leftText02="Content" leftText03="Art Direction" rightText="2021" />
                    </Route>
                    <Route exact path="/label/detail">
                        <DetailHead number="04" title="Label-L" content="Concept Project" leftText01="Art Direction" leftText02="Illustration" leftText03="" rightText="2021" />
                    </Route>
                    <Route exact path="/park_it/detail">
                        <DetailHead number="05" title="Park-it" content="parking App" leftText01="Branding" leftText02="Art Direction" leftText03="editotial Design" rightText="2021" />
                    </Route>
                    <Route exact path="/expo/detail">
                        <DetailHead number="06" title="Expo" content="Photograohic Exposition" leftText01="Art Direction" leftText02="university Project" leftText03="" rightText="2021" />
                    </Route>
                    <Route exact path="/library/detail">
                        <DetailHead number="07" title="Library" content="Illustrated Library for Despegar" leftText01="Branding" leftText02="Art Direction" leftText03="Illustration" rightText="2021" />
                    </Route>
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
            <AnimateData />
            <AnimatePresence exitBeforeEnter >
                <Switch location={location} key={rootPath} >
                    <Route exact path="/">
                        <BgPath changeColor={changeColor} gradient="url(#gradient01)" />
                    </Route>
                    <Route exact path="/filtro">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/book/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/filtro/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/museum">
                        <BgPath changeColor={changeColor} gradient="url(#gradient03)" />
                    </Route>
                    <Route exact path="/label">
                        <BgPath changeColor={changeColor} gradient="url(#gradient04)" />
                    </Route>
                    <Route exact path="/park_it">
                        <BgPath changeColor={changeColor} gradient="url(#gradient05)" />
                    </Route>
                    <Route exact path="/expo">
                        <BgPath changeColor={changeColor} gradient="url(#gradient06)" />
                    </Route>
                    <Route exact path="/library">
                        <BgPath changeColor={changeColor} gradient="url(#gradient07)" />
                    </Route>
                    <Route exact path="/book/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/filtro/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/museum/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/label/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/park_it/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/expo/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/library/detail">
                        <BgPath changeColor={changeColor} gradient="url(#gradient02)" />
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
                <Route exact path="/">
                    <AnimateBg changeColor={changeColor} detailLink="/book/detail" />
                    <Arrow nextLink="filtro" />
                </Route>
                <Route exact path="/filtro">
                    <AnimateBg changeColor={changeColor} detailLink="/filtro/detail" />
                    <Arrow nextLink="/museum" />
                </Route>
                <Route exact path="/museum/">
                    <AnimateBg changeColor={changeColor} detailLink="/museum/detail" />
                    <Arrow nextLink="label" />
                </Route>
                <Route exact path="/label">
                    <AnimateBg changeColor={changeColor} detailLink="/label/detail" />
                    <Arrow nextLink="park_it" />
                </Route>
                <Route exact path="/park_it">
                    <AnimateBg changeColor={changeColor} detailLink="/park_it/detail" />
                    <Arrow nextLink="expo" />
                </Route>
                <Route exact path="/expo">
                    <AnimateBg changeColor={changeColor} detailLink="/expo/detail" />
                    <Arrow nextLink="library" />
                </Route>
                <Route exact path="/library">
                    <AnimateBg changeColor={changeColor} detailLink="/library/detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/book/detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library/detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/filtro/detail">
                    <AnimateBg changeColor={changeColor} detailLink="/museum/detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/museum/detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library/detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/label/detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library/detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/park_it/detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library/detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/expo/detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library/detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/library/detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library/detail" />
                    <Arrow nextLink="/" />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

