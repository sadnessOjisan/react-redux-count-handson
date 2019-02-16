/**
 * count up 用のaction識別子(type)
 */
const COUNT_UP = "COUNT_UP";

/**
 * count down 用のaction識別子(type)
 */
const COUNT_DOWN = "COUNT_DOWN";

/**
 * reset 用のaction識別子(type)
 */
const RESET = "RESET";

/**
 * COUNT_UP アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。
 * @return {TCountUp} COUNT_UP 用のaction
 * @example {type: 'COUNT_UP'}
 */
const countUp = () => {
  return { type: COUNT_UP };
};

/**
 * COUNT_DOWN アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。
 * @return {TCountDown} COUNT_DOWN 用のaction
 * @example {type: 'COUNT_DOWN'}
 */
const countDown = () => {
  return { type: COUNT_DOWN };
};

/**
 * RESET アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。
 * @return {TReset} RESET 用のaction
 * @example {type: 'RESET'}
 */
const reset = () => {
  return { type: RESET };
};

/**
 * count modlue の初期stateです。
 * このアプリはこのstateのみをstoreに持つので、stateの型はTStoreです。
 * @type {TStore}
 */
const initialState = {
  count: 0
};

/**
 * reducerはstateを変更する役割を持ちます。古いstateとactionを元に、新しいstateを返します。
 * stateの破壊的変更は禁止されているので、新しいstateオブジェクトを作り直して返しています。
 * スプレッド演算子を使うと、新しいオブジェクトを簡単に作れるので、採用しています。
 *
 * (例)
 * ```
 * const sample = {a: 1, b: 2, c: 3}
 * const updateSample = {...sample, c:4}
 * // updateSample -> {a: 1, b: 2, c:4}
 * // これは、spread演算子の特性上、{a: 1, b: 2, c: 3, c:4}となるがオブジェクトの同一キーは上書きされるためである。
 * ```
 *
 * またdefaultのcase節ではinitialStateを返さないと、store生成時にundefinedがreturnされるため注意が必要です。
 * 参考: [Redux入門 3日目 Reduxの基本・Reducers(公式ドキュメント和訳)](https://qiita.com/kiita312/items/7fdce94912d6d9c801f8)
 * @param {TStore} state 更新前のstate
 * @param {TAction} action 更新内容を伝えるメッセージ
 * @return {TStore} 新しいstate
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
      return initialState;
  }
};

// esdocで仕様書を生成するためにexport. アプリを動かすためならば、この処理は不要(reducerのexportは必要)
export { COUNT_UP, COUNT_DOWN, RESET, countUp, countDown, reset, initialState };
export default reducer;
