# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## プロジェクト概要 

Reactで作ったポートフォリオサイトです。

主に使用したライブラリ

styled-components, framer-motion, react-router-dom, react-intersection-observer

苦労した点

Routerの実装に苦労しました。
カーソルを自作し、リンクにホバーした際に拡大するように実装しましたが、RouterのSwitchタグにkeyを与えるとそのSwitchの中のリンクでは拡大しないことが分かりました。keyを消してしまうとページ遷移時のアニメーションが働かないので、routerを複数作成して解決しました。ですが、Next.jsでリンクの実装をするなどのより良い解決方法もあったかもしれないと考えているので、知識不足だと感じました。
