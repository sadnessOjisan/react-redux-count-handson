// @flow

// action type
const COUNT_UP = "COUNT_UP";
const COUNT_DOWN = "COUNT_DOWN";

const actionTypes = {
  COUNT_UP,
  COUNT_DOWN
};

// action cretor

type TCountUpAction = { type: typeof COUNT_UP };
type TCountDownAction = { type: typeof COUNT_DOWN };
type TAction = TCountUpAction | TCountDownAction;

export const countUp = (): TCountUpAction => {
  return { type: COUNT_UP };
};

export const countDown = (): TCountDownAction => {
  return { type: COUNT_DOWN, payload: 2 };
};

// state
export type TState = {
  count: number
};

const initialState = {
  count: 0
};

// reducer
const reducer = (state: TState = initialState, action: TAction) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    default:
      return initialState; // これがないとundefinedがreturnされるよ https://qiita.com/kiita312/items/7fdce94912d6d9c801f8
  }
};

export default reducer;
