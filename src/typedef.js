// ESDoc用の型定義。実行のためにはこのファイルは不要

/**
 * reduxのstore. アプリ全体のstateを管理する. このアプリケーションではcountをstateとして持つ.
 * @typedef {Object} Store
 * @property {Number} count countの数値
 */

/**
 * reduxのaction.
 * @typedef {Object} Action
 * @property {String} type actionの識別子。必須。
 * @property {mixed?} payload actionのデータ。なくても良い。
 * @example const exampleAction = {type: 'HOGE', payload: 'sample_data'}
 */
