# react-redux-count-handson

| Contents                    | URL                                                                    | 備考　                                                 |
| --------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------ |
| 最新のコード                | https://github.com/sadnessOjisan/react-redux-count-handson             | -                                                      |
| Flow で型がつけられたコード | https://github.com/sadnessOjisan/react-redux-count-handson/tree/v1.1.0 | commitlog は`0a219278edbc7af0591b0b44b6161245bb186ea1` |
| app                         | https://compassionate-mayer-566641.netlify.com/                        | -                                                      |
| esdoc                       | https://reverent-jackson-1f2106.netlify.com                            | -                                                      |

## 概要

react-redux でカウントアップ、カウンドダウンを行う。なお react との接続は行い、react で作った view から redux を動かす

機能: action に応じて、カウントを増減させる

[redux-count-handson](https://github.com/sadnessOjisan/redux-count-handson)の続編です

## 使い方

起動

```
$ npm install

$ npm run build

$ open ./dist/index.html

```

もしくは、

```
$ npm run start
```

ローカルでドキュメントを読みたい

```
$ npm run docgen
```

## なぜ Flow がサンプルコードに入っているか

react-redux では様々な関数が登場したり、redux に読ませるための関数を自作する場面が多く出て来ます。
どのように呼ばれ、何が渡され、何が返されるのかということを読めれば、コードを追いかけられるはずなので、型を入れました。TS じゃないのは、学習コストを考慮してのことです。
