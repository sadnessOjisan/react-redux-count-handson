# redux-count-handson

## 概要

react-redux でカウントアップ、カウンドダウンを行う。なお react との接続は行い、react で作った view から redux を動かす

機能: action に応じて、カウントを増減させる

[redux-count-handson](https://github.com/sadnessOjisan/redux-count-handson)の続編です

## 起動

```
$ npm install

$ yarn run start

```

その後、 `http://localhost:3000` にアクセス。

## 解説

`bindActionCreators(actionCreators.countUp, dispatch)` は何をやっているのか
->

## なぜ Flow がサンプルコードに入っているか

react-redux では様々な関数が登場したり、redux に読ませるための関数を自作する場面が多く出て来ます。
どのように呼ばれ、何が渡され、何が返されるのかということを読めれば、コードを追いかけられるはずなので、型を入れました。TS じゃないのは、学習コストを考慮してのことです。
