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

import img01 from "../images/2.jpg"
import img02 from "../images/filtroCover.jpg"
import img03 from "../images/museumCover.jpg"
import img04 from "../images/labelCover.jpg"
import img05 from "../images/parl_itCover.jpg"
import img06 from "../images/libraryCover.jpg"


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
                    <Route exact path="/book_detail">
                        <DetailHead number="01" title="Book" content01="Fashion Portfolio for" content02="Melanie Tarica" leftText01="Branding" leftText02="Art Direction" leftText03="Editiorial Design" rightText="2021" />
                    </Route>
                    <Route exact path="/filtro_detail">
                        <DetailHead number="02" title="Filtro" content01="Water Arts Festival" content02="" leftText01="Branding" leftText02="Art Direction" leftText03="Illustration" rightText="2021" />
                    </Route>
                    <Route exact path="/museum_detail">
                        <DetailHead number="03" title="Museum" content01="The Design Museum" content02="" leftText01="UX/UI" leftText02="Content" leftText03="Art Direction" rightText="2021" />
                    </Route>
                    <Route exact path="/label_detail">
                        <DetailHead number="04" title="Label-L" content01="Concept Project" content02="" leftText01="Art Direction" leftText02="Illustration" leftText03="" rightText="2021" />
                    </Route>
                    <Route exact path="/park_it_detail">
                        <DetailHead number="05" title="Park-it" content01="parking App" content02="" leftText01="Branding" leftText02="Art Direction" leftText03="editotial Design" rightText="2021" />
                    </Route>
                    <Route exact path="/expo_detail">
                        <DetailHead number="06" title="Expo" content01="Photograohic Exposition" content02="" leftText01="Art Direction" leftText02="university Project" leftText03="" rightText="2021" />
                    </Route>
                    <Route exact path="/library_detail">
                        <DetailHead number="07" title="Library" content01="Illustrated Library for" content02="Despegar" leftText01="Branding" leftText02="Art Direction" leftText03="Illustration" rightText="2021" />
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
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="url(#gradient01)" />
                    </Route>
                    <Route exact path="/filtro">
                        <BgPath hoverBg={img02} changeColor={changeColor} gradient="url(#gradient02)" />
                    </Route>
                    <Route exact path="/museum">
                        <BgPath hoverBg={img05} changeColor={changeColor} gradient="url(#gradient03)" />
                    </Route>
                    <Route exact path="/label">
                        <BgPath hoverBg={img04} changeColor={changeColor} gradient="url(#gradient04)" />
                    </Route>
                    <Route exact path="/park_it">
                        <BgPath hoverBg={img02} changeColor={changeColor} gradient="url(#gradient05)" />
                    </Route>
                    <Route exact path="/expo">
                        <BgPath hoverBg={img03} changeColor={changeColor} gradient="url(#gradient06)" />
                    </Route>
                    <Route exact path="/library">
                        <BgPath hoverBg={img06} changeColor={changeColor} gradient="url(#gradient07)" />
                    </Route>
                    <Route exact path="/book_detail">
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="" />
                    </Route>
                    <Route exact path="/filtro_detail">
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="" />
                    </Route>
                    <Route exact path="/museum_detail">
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="" />
                    </Route>
                    <Route exact path="/label_detail">
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="" />
                    </Route>
                    <Route exact path="/park_it_detail">
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="" />
                    </Route>
                    <Route exact path="/expo_detail">
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="" />
                    </Route>
                    <Route exact path="/library_detail">
                        <BgPath hoverBg={img01} changeColor={changeColor} gradient="" />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export const AnimateRouter = ({ changeColor }) => {
    return (
        <AnimatePresence>
            <Switch>
                <Route exact path="/">
                    <AnimateBg changeColor={changeColor} detailLink="/book_detail" />
                    <Arrow nextLink="filtro" />
                </Route>
                <Route exact path="/filtro">
                    <AnimateBg changeColor={changeColor} detailLink="/filtro_detail" />
                    <Arrow nextLink="/museum" />
                </Route>
                <Route exact path="/museum/">
                    <AnimateBg changeColor={changeColor} detailLink="/museum_detail" />
                    <Arrow nextLink="label" />
                </Route>
                <Route exact path="/label">
                    <AnimateBg changeColor={changeColor} detailLink="/label_detail" />
                    <Arrow nextLink="park_it" />
                </Route>
                <Route exact path="/park_it">
                    <AnimateBg changeColor={changeColor} detailLink="/park_it_detail" />
                    <Arrow nextLink="expo" />
                </Route>
                <Route exact path="/expo">
                    <AnimateBg changeColor={changeColor} detailLink="/expo_detail" />
                    <Arrow nextLink="library" />
                </Route>
                <Route exact path="/library">
                    <AnimateBg changeColor={changeColor} detailLink="/library_detail" />
                    <Arrow nextLink="/" />
                </Route>
                <Route exact path="/book_detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library_detail" />
                    <Arrow nextLink="/filtro" />
                </Route>
                <Route exact path="/filtro_detail">
                    <AnimateBg changeColor={changeColor} detailLink="/museum_detail" />
                    <Arrow nextLink="/filtro" />
                </Route>
                <Route exact path="/museum_detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library_detail" />
                    <Arrow nextLink="/filtro" />
                </Route>
                <Route exact path="/label_detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library_detail" />
                    <Arrow nextLink="/filtro" />
                </Route>
                <Route exact path="/park_it_detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library_detail" />
                    <Arrow nextLink="/filtro" />
                </Route>
                <Route exact path="/expo_detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library_detail" />
                    <Arrow nextLink="/filtro" />
                </Route>
                <Route exact path="/library_detail">
                    <AnimateBg changeColor={changeColor} detailLink="/library_detail" />
                    <Arrow nextLink="/filtro" />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

