# react-redux-count-handson

| Contents                    | URL                                                                       | 備考　                                                                             |
| --------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 最新のコード                | https://github.com/sadnessOjisan/react-redux-count-handson                | -                                                                                  |
| Flow で型がつけられたコード | https://github.com/sadnessOjisan/react-redux-count-handson/tree/v1.1.0    | commit hash は`0a219278edbc7af0591b0b44b6161245bb186ea1`です。                     |
| app                         | https://compassionate-mayer-566641.netlify.com/                           | master が更新されるたびに [netlify](https://app.netlify.com/) にデプロイされます。 |
| esdoc                       | https://reverent-jackson-1f2106.netlify.com                               | master が更新されるたびに [netlify](https://app.netlify.com/) にデプロイされます。 |
| nocomment                   | https://github.com/sadnessOjisan/react-redux-count-handson/tree/nocomment | コメントが一切ないです。                                                           |

## 概要

react-redux でカウントアプリを作ります。react で作った view から redux を動かしてみましょう。

[redux-count-handson](https://github.com/sadnessOjisan/redux-count-handson)の続編です。

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

ローカルでドキュメントを読みたい場合は、

```
$ npm run docgen
```

## なぜ Flow がサンプルコードに入っているか

[react-redux](https://react-redux.js.org/) では様々な関数が登場したり、[redux](https://redux.js.org/) に読ませるための関数を自作する場面が多く出て来ます。
どのように呼ばれ、何が渡され、何が返されるのかということを読めれば、コードを追いかけられるはずなので、型を入れました。[TypeScript](https://www.typescriptlang.org/) じゃないのは、学習コストを考慮してのことです。

[Flow](https://flow.org/en/) の型を読みたい場合は、

```
$ git reset --hard 0a219278edbc7af0591b0b44b6161245bb186ea1
```

もしくは、 v1.1.0 のタグをみてください。(https://github.com/sadnessOjisan/react-redux-count-handson/tree/v1.1.0)
