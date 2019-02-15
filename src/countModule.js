// action type

/**
 * count up用のaction識別子(type)
 */
const COUNT_UP = "COUNT_UP";

/**
 * count down用のaction識別子(type)
 */
const COUNT_DOWN = "COUNT_DOWN";

/**
 * reset用のaction識別子(type)
 */
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

/**
 * action creator
 * @return {Action} COUNT_UP 用のaction
 */
const countUp = () => {
  return { type: COUNT_UP };
};

/**
 * action creator
 * @return {Action} COUNT_DOWN 用のaction
 */
const countDown = () => {
  return { type: COUNT_DOWN };
};

/**
 * action creator
 * @return {Action} RESET 用のaction
 */
const reset = () => {
  return { type: RESET };
};

// state

/**
 * countのstateです。
 * reducerから更新されます。
 * @type {Store}
 */
const initialState = {
  count: 0
};

// reducer

/**
 * reducerはstateを変更する役割を持ちます。古いstateとactionを元に、新しいstateを返します。
 * stateの破壊的変更は禁止されているので、新しいstateオブジェクトを作り直して返しています。
 * @param {Store} state 更新前のstate
 * @param {Action} action 更新内容を伝えるメッセージ
 * @return {Store} 新しいstate
 */
const reducer = (state = initialState, action) => {
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

// esdocで仕様書を生成するためにexport. アプリを動かすためならば、この処理は不要(reducerのexportは必要)
export { COUNT_UP, COUNT_DOWN, RESET, countUp, countDown, reset, initialState };
export default reducer;
