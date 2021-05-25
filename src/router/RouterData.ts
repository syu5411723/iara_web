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

export const RouterData = [
    {
        link: "/",
        component: {Book},
    },
    {
        link: "/filtro",
        component: {Book},
    },
    {
        link: "/museum",
        component: {Book},
    },
    {
        link: "/label",
        component: {Book},
    },
    {
        link: "/park_it",
        component: {Book},
    },
    {
        link: "/expo",
        component: {Book},
    },
    {
        link: "/library",
        component: {Book},
    },
    {
        link: "/book/detail",
        component: {Book},
    },
    {
        link: "/filtro/detail",
        component: {Book},
    },
    {
        link: "/museum/detail",
        component: {Book},
    },
    {
        link: "/label/detail",
        component: {Book},
    },
    {
        link: "/park_it/detail",
        component: {Book},
    },
    {
        link: "/expo/detail",
        component: {Book},
    },
    {
        link: "/library/detail",
        component: {Book},
    },

]