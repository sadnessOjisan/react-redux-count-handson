// ESDoc用の型定義。実行のためにはこのファイルは不要

/**
 * reduxのstore. アプリ全体のstateを管理する. このアプリケーションではcountをstateとして持つ.
 * @typedef {Object} TStore
 * @property {Number} count countの数値
 */

/**
 * reducerが受け取るActionの型です。
 * もっと正確に言うならば、
 * TCountUp, TCountDown, TReset
 * の[Union Types](https://flow.org/en/docs/types/unions/)です。
 * @typedef {Object} TAction
 * @property {String} type actionの識別子。必須。
 * @property {mixed?} payload actionのデータ。なくても良い。reducerにデータを流したい時に利用します。
 * @example const countUpAction = {type: 'COUNT_UP'}
 * @example const countDownAction = {type: 'COUNT_DOWN'}
 * @example const resetAction = {type: 'RESET'}
 */

/**
 * COUNT_UP アクションの型です。
 * @typedef {Object} TCountUp
 * @property {'COUNT_UP'} type action typeのオブジェクトです。 リテラル値 'COUNT_UP'
 */

/**
 * COUNT_DOWN アクションの型です。
 * @typedef {Object} TCountDown
 * @property {'COUNT_DOWN'} type action typeのオブジェクトです。 リテラル値 'COUNT_DOWN'
 */

/**
 * RESET アクションの型です。
 * @typedef {Object} TReset
 * @property {'RESET'} type action typeのオブジェクトです。 リテラル値 'RESET'
 */

/**
 * mapStateToProps の返り値の型です。
 * @typedef {Object} TMapStateToProps
 * @property {number} count カウント数値
 */

/**
 * mapDipatchToProps の返り値の型です。
 * @typedef {Object} TMapDispatchToProps
 * @property {void=>void} countUp - countUp actionのdispatcher
 * @property {void=>void} countDown - countDown actionのdispatcher
 * @property {void=>void} reset - reset actionのdispatcher
 */
