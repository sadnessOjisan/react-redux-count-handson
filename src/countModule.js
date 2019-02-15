// @flow

// action type
const COUNT_UP = "COUNT_UP";
const COUNT_DOWN = "COUNT_DOWN";
const RESET = "RESET";

// action cretor

/**
 * reduxのstore. アプリ全体のstateを管理する. このアプリケーションではcountをstateとして持つ.
 * @typedef {Object} Store
 * @property {Number} count countの数値
 */

/**
 * reduxのaction.
 * @typedef {Object} Action
 * @property {String} type actionの識別子
 * @property {mixed?} payload actionのデータ
 * @example const exampleAction = {type: 'HOGE', payload: 'sample_data'}
 */

type TCountUpAction = { type: typeof COUNT_UP };
type TCountDownAction = { type: typeof COUNT_DOWN };
type TResetAction = { type: typeof RESET };
type TAction = TCountUpAction | TCountDownAction | TResetAction;

export const countUp = (): TCountUpAction => {
  return { type: COUNT_UP };
};

export const countDown = (): TCountDownAction => {
  return { type: COUNT_DOWN };
};

export const reset = (): TResetAction => {
  return { type: RESET };
};

// state
export type TState = {
  count: number
};

const initialState = {
  count: 0
};

// reducer

/**
 *
 * @param {*} state
 * @param {*} action
 */
const reducer = (state: TState = initialState, action: TAction) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    case RESET:
      return initialState;
    default:
      return initialState; // これがないとundefinedがreturnされるよ https://qiita.com/kiita312/items/7fdce94912d6d9c801f8
  }
};

export default reducer;
