/**
 * count up用のaction type(actionの識別子)
 */
const COUNT_UP = "COUNT_UP";

/**
 * count down用のaction type(actionの識別子)
 */
const COUNT_DOWN = "COUNT_DOWN";

/**
 * reset用のaction type(actionの識別子)
 */
const RESET = "RESET";

/**
 * COUNT_UP アクションを生成するための、action creator
 * @return {Action} COUNT_UP 用のaction
 */
const countUp = () => {
  return { type: COUNT_UP };
};

/**
 * COUNT_DOWN アクションを生成するための、action creator
 * @return {Action} COUNT_DOWN 用のaction
 */
const countDown = () => {
  return { type: COUNT_DOWN };
};

/**
 * RESET アクションを生成するための、action creator
 * @return {Action} RESET 用のaction
 */
const reset = () => {
  return { type: RESET };
};

/**
 * count stateの初期stateです。
 * このアプリはこのstateのみをstoreに持つので、stateの型はStoreです。
 * @type {Store}
 */
const initialState = {
  count: 0
};

/**
 * reducerはstateを変更する役割を持ちます。古いstateとactionを元に、新しいstateを返します。
 * stateの破壊的変更は禁止されているので、新しいstateオブジェクトを作り直して返しています。
 * default時にinitialStateを返さないと、store生成時にundefinedがreturnされる。
 * 参考: [Redux入門 3日目 Reduxの基本・Reducers(公式ドキュメント和訳)](https://qiita.com/kiita312/items/7fdce94912d6d9c801f8)
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
      return initialState;
  }
};

// esdocで仕様書を生成するためにexport. アプリを動かすためならば、この処理は不要(reducerのexportは必要)
export { COUNT_UP, COUNT_DOWN, RESET, countUp, countDown, reset, initialState };
export default reducer;
